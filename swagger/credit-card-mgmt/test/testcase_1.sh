curl http://localhost:5000/api/list | jq

curl -X DELETE http://localhost:5000/api/deregister/1003

curl http://localhost:5000/api/list | jq

curl -X 'POST' \
  'http://localhost:5000/api/register' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "ccd": {
    "credit_card_number": "1211-1221-1234-2201",
    "credit_card_expiry_date": "2025-01-23",
    "credit_card_type": "visa"
  }
}'

curl http://localhost:5000/api/list | jq

curl -X 'PUT' \
  'http://localhost:5000/api/update/1005' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "ccd": {
    "credit_card_number": "1211-1221-1234-2201",
    "credit_card_expiry_date": "2025-06-15",
    "credit_card_type": "visa"
  }
}'

curl http://localhost:5000/api/list | jq
