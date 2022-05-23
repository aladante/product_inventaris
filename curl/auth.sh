curl -X POST localhost:8080/api/auth/signin \
	-H "Content-Type: application/json" \
	-d '{"userName": "admin", "password": "secret"}'
