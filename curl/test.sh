curl -X GET localhost:8080/api/test/user\
	-H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGluZyIsImlhdCI6MTY1MzIwNDg4MywiZXhwIjoxNjUzMjA2MTE2fQ.6pkOQXsiEHMZX37buDtHYE3Dcexwv-KMOfMB8pE85k1L6iLZ07TKA9r2tZuwnOFxnYwQpXMBfZLslu-hhdXXQg" \
	-d '{"userName": "ching", "password": "adminn"}'

