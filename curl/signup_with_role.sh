curl -X POST localhost:8080/api/auth/signup \
	-H "Content-Type: application/json" \
	-d '{"username": "adminn", "password": "adminn", "role": ["admin"]}'
