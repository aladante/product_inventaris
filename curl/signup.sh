curl -X POST 'http://vacinfi.com/graphql'  \
	-H 'Accept: application/json, multipart/mixed' \
	-H 'Accept-Language: en-US,en;q=0.5'  \
	-H 'content-type: application/json'\
	--data-raw '{"query":"mutation {\n  createUser(input: {username: \"admin\", password: \"secret\" role: [\"admin\"]}) {\n    id\n    username\n  }\n}","operationName":null}'

