endpoints:
  POST - https://h7tefjrsuj.execute-api.us-east-2.amazonaws.com/dev/setDataDynamoApi/{Id}
  GET - https://h7tefjrsuj.execute-api.us-east-2.amazonaws.com/dev/getStarwarsApi
  GET - https://h7tefjrsuj.execute-api.us-east-2.amazonaws.com/dev/getStarwarsApi/{id}
  GET - https://h7tefjrsuj.execute-api.us-east-2.amazonaws.com/dev/getDynamoApi
  GET - https://h7tefjrsuj.execute-api.us-east-2.amazonaws.com/dev/getDynamoApi/{Id}
functions:
  setDataDynamoApi: renatogamonal-dev-setDataDynamoApi
  getStarwarsApi: renatogamonal-dev-getStarwarsApi
  getDynamoApi: renatogamonal-dev-getDynamoApi

Stack Outputs:
  SetDataDynamoApiLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-2:636701968755:function:renatogamonal-dev-setDataDynamoApi:12
  GetStarwarsApiLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-2:636701968755:function:renatogamonal-dev-getStarwarsApi:12
  GetDynamoApiLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-2:636701968755:function:renatogamonal-dev-getDynamoApi:2
  ServiceEndpoint: https://h7tefjrsuj.execute-api.us-east-2.amazonaws.com/dev
  ServerlessDeploymentBucketName: renatogamonal-dev-serverlessdeploymentbucket-14qmwmr6qlhk