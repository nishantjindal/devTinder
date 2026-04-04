const cron = require("node-cron");
const ConnectionRequestModel = require("../models/connectionRequest");
const { subDays, startOfDay, endOfDay } = require("date-fns");
const sendEmail = require("./sendEmail");

// This job will run at 8 AM in the morning everyday
cron.schedule(" 0 8 * * *", async () => {
  try {
    const yesterday = subDays(new Date(), 1);

    const yesterdayStart = startOfDay(yesterday);

    const yesterdayEnd = endOfDay(yesterday);

    const pendingRequests = await ConnectionRequestModel.find({
      status: "interested",
      createdAt: {
        $gte: yesterdayStart,
        $lt: yesterdayEnd,
      },
    }).populate("fromUserId toUserId");

    const listOfEmails = [
      ...new Set(pendingRequests.map((req) => req.toUserId.emailId)),
    ];

    for (const email of listOfEmails) {
      const emailRes = await sendEmail.run(
        "New Friend Requests pending for " + email,
        "There are so many friend requests pending, please login to DevTinder.co.in and accept or reject the requests.",
      );
    }
  } catch (err) {
    console.log(err);
  }
});
