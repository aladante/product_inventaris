gcloud iam service-accounts add-iam-policy-binding \
--role="roles/iam.workloadIdentityUser" \
--member="serviceAccount:vaccinatiepunt.svc.id.goog[vaccinatiepunt/cloud-sql-sa]" \
cloud-sql-sa@vaccinatiepunt.iam.gserviceaccount.com
