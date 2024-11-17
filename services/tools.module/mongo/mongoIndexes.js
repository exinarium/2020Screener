
db = db.getSiblingDB("CandidateInteraction");

db.CandidateInteraction.createIndex({'userId': 1});
db.CandidateInteraction.createIndex({'profileId': 1});
db.CandidateInteraction.createIndex({'organizationId': 1});
db.CandidateInteraction.createIndex({'isDeleted': 1});

db = db.getSiblingDB("CandidateProfile");

db.CandidateProfile.createIndex({'userId': 1});
db.CandidateProfile.createIndex({'organizationId': 1});
db.CandidateProfile.createIndex({'isDeleted': 1});

db = db.getSiblingDB("CovidScreener");

db.ConnectionStrings.createIndex({'module': 1});
db.EncryptionKeys.createIndex({'name': 1});

db = db.getSiblingDB("MessageBus");
db.Message.createIndex({'topic': 1});

db = db.getSiblingDB("Users");
db.PaymentPlan.createIndex({'planNumber': 1});
db.User.createIndex({'organizationId': 1});
db.User.createIndex({'email': 1});
db.User.createIndex({'password': 1});
db.User.createIndex({'isDeleted': 1});