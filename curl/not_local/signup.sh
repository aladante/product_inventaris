curl -X POST 35.204.154.30:8080/api/auth/signup \
	-H "Content-Type: application/json" \
	-d '{"username": "admin", "password": "secret", "role": ["admin"]}'
