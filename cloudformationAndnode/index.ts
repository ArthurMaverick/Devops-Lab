import {CloudFormation} from 'aws-sdk'


const values:  CloudFormation.CreateStackInput = {
  Parameters: [
    {ParameterKey: 'KeyName', ParameterValue: 'myKeyPair'}, 
  ] , 
StackName: 'RANDOM'
}


function CreateStack(template: CloudFormation.CreateStackInput) {
  const cfn = new CloudFormation({apiVersion: '2010-09-09'})
  cfn.createStack(template, callback => console.log(callback))
}

function template (params: CloudFormation.CreateStackInput) {
  return params
}


CreateStack(template(values))