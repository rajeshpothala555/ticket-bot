//user Profile use to store data
class UserProfile {
    constructor(ticketId,Title, Description, Department, Date, Issue, Urgency,Status) {
      this.ticketId = ticketId
      this.Title = Title
      this.Description = Description;
      this.Department = Department;
      this.Date = Date;
      this.Issue = Issue;
      this.Urgency = Urgency;
      this.Status = Status;


    }
  }
  module.exports.UserProfile = UserProfile;