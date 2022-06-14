curl -X POST 34.149.153.64/api/auth/signup \
	-H "Content-Type: application/json" \
	-d '{"username": "admin", "password": "secret", "role": ["admin"]}'

