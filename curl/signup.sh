curl -X POST localhost:8080/api/auth/signup \
	-H "Content-Type: application/json" \
	-d '{"username": "admin", "password": "secret", "role": ["admin"]}'

curl -X POST localhost:8080/api/auth/signup \
	-H "Content-Type: application/json" \
	-d '{"username": "user", "password": "secret", "role": ["user"]}'
