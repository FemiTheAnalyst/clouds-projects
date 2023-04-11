import json
import boto3


# Create a client for the DynamoDB service
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-challenge')

def lambda_handler(event, context):
    response = table.get_item(
        Key = {
            'ID': 'visits'
            }
    )
    visit_count = response['Item']['Counter']
    visit_count = str(int(visit_count) +1)    

    response =   table.put_item(
        Item = {
            'ID':'visits',
            'Counter':visit_count
        }
    )

    return {
        'statusCode':200,
        'headers': {
            # "content-type" : "application/json"
            'Access-control-Allow-Header':'*',
            'Access-control-Allow-Origin':'*',
            'Access-control-Allow-Method':'*'
        },
        'body': visit_count
        }
    
