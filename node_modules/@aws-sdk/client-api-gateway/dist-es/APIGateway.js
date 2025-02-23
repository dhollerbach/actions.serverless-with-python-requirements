import { createAggregatedClient } from "@smithy/smithy-client";
import { APIGatewayClient } from "./APIGatewayClient";
import { CreateApiKeyCommand, } from "./commands/CreateApiKeyCommand";
import { CreateAuthorizerCommand, } from "./commands/CreateAuthorizerCommand";
import { CreateBasePathMappingCommand, } from "./commands/CreateBasePathMappingCommand";
import { CreateDeploymentCommand, } from "./commands/CreateDeploymentCommand";
import { CreateDocumentationPartCommand, } from "./commands/CreateDocumentationPartCommand";
import { CreateDocumentationVersionCommand, } from "./commands/CreateDocumentationVersionCommand";
import { CreateDomainNameAccessAssociationCommand, } from "./commands/CreateDomainNameAccessAssociationCommand";
import { CreateDomainNameCommand, } from "./commands/CreateDomainNameCommand";
import { CreateModelCommand } from "./commands/CreateModelCommand";
import { CreateRequestValidatorCommand, } from "./commands/CreateRequestValidatorCommand";
import { CreateResourceCommand, } from "./commands/CreateResourceCommand";
import { CreateRestApiCommand, } from "./commands/CreateRestApiCommand";
import { CreateStageCommand } from "./commands/CreateStageCommand";
import { CreateUsagePlanCommand, } from "./commands/CreateUsagePlanCommand";
import { CreateUsagePlanKeyCommand, } from "./commands/CreateUsagePlanKeyCommand";
import { CreateVpcLinkCommand, } from "./commands/CreateVpcLinkCommand";
import { DeleteApiKeyCommand, } from "./commands/DeleteApiKeyCommand";
import { DeleteAuthorizerCommand, } from "./commands/DeleteAuthorizerCommand";
import { DeleteBasePathMappingCommand, } from "./commands/DeleteBasePathMappingCommand";
import { DeleteClientCertificateCommand, } from "./commands/DeleteClientCertificateCommand";
import { DeleteDeploymentCommand, } from "./commands/DeleteDeploymentCommand";
import { DeleteDocumentationPartCommand, } from "./commands/DeleteDocumentationPartCommand";
import { DeleteDocumentationVersionCommand, } from "./commands/DeleteDocumentationVersionCommand";
import { DeleteDomainNameAccessAssociationCommand, } from "./commands/DeleteDomainNameAccessAssociationCommand";
import { DeleteDomainNameCommand, } from "./commands/DeleteDomainNameCommand";
import { DeleteGatewayResponseCommand, } from "./commands/DeleteGatewayResponseCommand";
import { DeleteIntegrationCommand, } from "./commands/DeleteIntegrationCommand";
import { DeleteIntegrationResponseCommand, } from "./commands/DeleteIntegrationResponseCommand";
import { DeleteMethodCommand, } from "./commands/DeleteMethodCommand";
import { DeleteMethodResponseCommand, } from "./commands/DeleteMethodResponseCommand";
import { DeleteModelCommand } from "./commands/DeleteModelCommand";
import { DeleteRequestValidatorCommand, } from "./commands/DeleteRequestValidatorCommand";
import { DeleteResourceCommand, } from "./commands/DeleteResourceCommand";
import { DeleteRestApiCommand, } from "./commands/DeleteRestApiCommand";
import { DeleteStageCommand } from "./commands/DeleteStageCommand";
import { DeleteUsagePlanCommand, } from "./commands/DeleteUsagePlanCommand";
import { DeleteUsagePlanKeyCommand, } from "./commands/DeleteUsagePlanKeyCommand";
import { DeleteVpcLinkCommand, } from "./commands/DeleteVpcLinkCommand";
import { FlushStageAuthorizersCacheCommand, } from "./commands/FlushStageAuthorizersCacheCommand";
import { FlushStageCacheCommand, } from "./commands/FlushStageCacheCommand";
import { GenerateClientCertificateCommand, } from "./commands/GenerateClientCertificateCommand";
import { GetAccountCommand } from "./commands/GetAccountCommand";
import { GetApiKeyCommand } from "./commands/GetApiKeyCommand";
import { GetApiKeysCommand } from "./commands/GetApiKeysCommand";
import { GetAuthorizerCommand, } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommand, } from "./commands/GetAuthorizersCommand";
import { GetBasePathMappingCommand, } from "./commands/GetBasePathMappingCommand";
import { GetBasePathMappingsCommand, } from "./commands/GetBasePathMappingsCommand";
import { GetClientCertificateCommand, } from "./commands/GetClientCertificateCommand";
import { GetClientCertificatesCommand, } from "./commands/GetClientCertificatesCommand";
import { GetDeploymentCommand, } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommand, } from "./commands/GetDeploymentsCommand";
import { GetDocumentationPartCommand, } from "./commands/GetDocumentationPartCommand";
import { GetDocumentationPartsCommand, } from "./commands/GetDocumentationPartsCommand";
import { GetDocumentationVersionCommand, } from "./commands/GetDocumentationVersionCommand";
import { GetDocumentationVersionsCommand, } from "./commands/GetDocumentationVersionsCommand";
import { GetDomainNameAccessAssociationsCommand, } from "./commands/GetDomainNameAccessAssociationsCommand";
import { GetDomainNameCommand, } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommand, } from "./commands/GetDomainNamesCommand";
import { GetExportCommand } from "./commands/GetExportCommand";
import { GetGatewayResponseCommand, } from "./commands/GetGatewayResponseCommand";
import { GetGatewayResponsesCommand, } from "./commands/GetGatewayResponsesCommand";
import { GetIntegrationCommand, } from "./commands/GetIntegrationCommand";
import { GetIntegrationResponseCommand, } from "./commands/GetIntegrationResponseCommand";
import { GetMethodCommand } from "./commands/GetMethodCommand";
import { GetMethodResponseCommand, } from "./commands/GetMethodResponseCommand";
import { GetModelCommand } from "./commands/GetModelCommand";
import { GetModelsCommand } from "./commands/GetModelsCommand";
import { GetModelTemplateCommand, } from "./commands/GetModelTemplateCommand";
import { GetRequestValidatorCommand, } from "./commands/GetRequestValidatorCommand";
import { GetRequestValidatorsCommand, } from "./commands/GetRequestValidatorsCommand";
import { GetResourceCommand } from "./commands/GetResourceCommand";
import { GetResourcesCommand, } from "./commands/GetResourcesCommand";
import { GetRestApiCommand } from "./commands/GetRestApiCommand";
import { GetRestApisCommand } from "./commands/GetRestApisCommand";
import { GetSdkCommand } from "./commands/GetSdkCommand";
import { GetSdkTypeCommand } from "./commands/GetSdkTypeCommand";
import { GetSdkTypesCommand } from "./commands/GetSdkTypesCommand";
import { GetStageCommand } from "./commands/GetStageCommand";
import { GetStagesCommand } from "./commands/GetStagesCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { GetUsageCommand } from "./commands/GetUsageCommand";
import { GetUsagePlanCommand, } from "./commands/GetUsagePlanCommand";
import { GetUsagePlanKeyCommand, } from "./commands/GetUsagePlanKeyCommand";
import { GetUsagePlanKeysCommand, } from "./commands/GetUsagePlanKeysCommand";
import { GetUsagePlansCommand, } from "./commands/GetUsagePlansCommand";
import { GetVpcLinkCommand } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommand } from "./commands/GetVpcLinksCommand";
import { ImportApiKeysCommand, } from "./commands/ImportApiKeysCommand";
import { ImportDocumentationPartsCommand, } from "./commands/ImportDocumentationPartsCommand";
import { ImportRestApiCommand, } from "./commands/ImportRestApiCommand";
import { PutGatewayResponseCommand, } from "./commands/PutGatewayResponseCommand";
import { PutIntegrationCommand, } from "./commands/PutIntegrationCommand";
import { PutIntegrationResponseCommand, } from "./commands/PutIntegrationResponseCommand";
import { PutMethodCommand } from "./commands/PutMethodCommand";
import { PutMethodResponseCommand, } from "./commands/PutMethodResponseCommand";
import { PutRestApiCommand } from "./commands/PutRestApiCommand";
import { RejectDomainNameAccessAssociationCommand, } from "./commands/RejectDomainNameAccessAssociationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestInvokeAuthorizerCommand, } from "./commands/TestInvokeAuthorizerCommand";
import { TestInvokeMethodCommand, } from "./commands/TestInvokeMethodCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAccountCommand, } from "./commands/UpdateAccountCommand";
import { UpdateApiKeyCommand, } from "./commands/UpdateApiKeyCommand";
import { UpdateAuthorizerCommand, } from "./commands/UpdateAuthorizerCommand";
import { UpdateBasePathMappingCommand, } from "./commands/UpdateBasePathMappingCommand";
import { UpdateClientCertificateCommand, } from "./commands/UpdateClientCertificateCommand";
import { UpdateDeploymentCommand, } from "./commands/UpdateDeploymentCommand";
import { UpdateDocumentationPartCommand, } from "./commands/UpdateDocumentationPartCommand";
import { UpdateDocumentationVersionCommand, } from "./commands/UpdateDocumentationVersionCommand";
import { UpdateDomainNameCommand, } from "./commands/UpdateDomainNameCommand";
import { UpdateGatewayResponseCommand, } from "./commands/UpdateGatewayResponseCommand";
import { UpdateIntegrationCommand, } from "./commands/UpdateIntegrationCommand";
import { UpdateIntegrationResponseCommand, } from "./commands/UpdateIntegrationResponseCommand";
import { UpdateMethodCommand, } from "./commands/UpdateMethodCommand";
import { UpdateMethodResponseCommand, } from "./commands/UpdateMethodResponseCommand";
import { UpdateModelCommand } from "./commands/UpdateModelCommand";
import { UpdateRequestValidatorCommand, } from "./commands/UpdateRequestValidatorCommand";
import { UpdateResourceCommand, } from "./commands/UpdateResourceCommand";
import { UpdateRestApiCommand, } from "./commands/UpdateRestApiCommand";
import { UpdateStageCommand } from "./commands/UpdateStageCommand";
import { UpdateUsageCommand } from "./commands/UpdateUsageCommand";
import { UpdateUsagePlanCommand, } from "./commands/UpdateUsagePlanCommand";
import { UpdateVpcLinkCommand, } from "./commands/UpdateVpcLinkCommand";
const commands = {
    CreateApiKeyCommand,
    CreateAuthorizerCommand,
    CreateBasePathMappingCommand,
    CreateDeploymentCommand,
    CreateDocumentationPartCommand,
    CreateDocumentationVersionCommand,
    CreateDomainNameCommand,
    CreateDomainNameAccessAssociationCommand,
    CreateModelCommand,
    CreateRequestValidatorCommand,
    CreateResourceCommand,
    CreateRestApiCommand,
    CreateStageCommand,
    CreateUsagePlanCommand,
    CreateUsagePlanKeyCommand,
    CreateVpcLinkCommand,
    DeleteApiKeyCommand,
    DeleteAuthorizerCommand,
    DeleteBasePathMappingCommand,
    DeleteClientCertificateCommand,
    DeleteDeploymentCommand,
    DeleteDocumentationPartCommand,
    DeleteDocumentationVersionCommand,
    DeleteDomainNameCommand,
    DeleteDomainNameAccessAssociationCommand,
    DeleteGatewayResponseCommand,
    DeleteIntegrationCommand,
    DeleteIntegrationResponseCommand,
    DeleteMethodCommand,
    DeleteMethodResponseCommand,
    DeleteModelCommand,
    DeleteRequestValidatorCommand,
    DeleteResourceCommand,
    DeleteRestApiCommand,
    DeleteStageCommand,
    DeleteUsagePlanCommand,
    DeleteUsagePlanKeyCommand,
    DeleteVpcLinkCommand,
    FlushStageAuthorizersCacheCommand,
    FlushStageCacheCommand,
    GenerateClientCertificateCommand,
    GetAccountCommand,
    GetApiKeyCommand,
    GetApiKeysCommand,
    GetAuthorizerCommand,
    GetAuthorizersCommand,
    GetBasePathMappingCommand,
    GetBasePathMappingsCommand,
    GetClientCertificateCommand,
    GetClientCertificatesCommand,
    GetDeploymentCommand,
    GetDeploymentsCommand,
    GetDocumentationPartCommand,
    GetDocumentationPartsCommand,
    GetDocumentationVersionCommand,
    GetDocumentationVersionsCommand,
    GetDomainNameCommand,
    GetDomainNameAccessAssociationsCommand,
    GetDomainNamesCommand,
    GetExportCommand,
    GetGatewayResponseCommand,
    GetGatewayResponsesCommand,
    GetIntegrationCommand,
    GetIntegrationResponseCommand,
    GetMethodCommand,
    GetMethodResponseCommand,
    GetModelCommand,
    GetModelsCommand,
    GetModelTemplateCommand,
    GetRequestValidatorCommand,
    GetRequestValidatorsCommand,
    GetResourceCommand,
    GetResourcesCommand,
    GetRestApiCommand,
    GetRestApisCommand,
    GetSdkCommand,
    GetSdkTypeCommand,
    GetSdkTypesCommand,
    GetStageCommand,
    GetStagesCommand,
    GetTagsCommand,
    GetUsageCommand,
    GetUsagePlanCommand,
    GetUsagePlanKeyCommand,
    GetUsagePlanKeysCommand,
    GetUsagePlansCommand,
    GetVpcLinkCommand,
    GetVpcLinksCommand,
    ImportApiKeysCommand,
    ImportDocumentationPartsCommand,
    ImportRestApiCommand,
    PutGatewayResponseCommand,
    PutIntegrationCommand,
    PutIntegrationResponseCommand,
    PutMethodCommand,
    PutMethodResponseCommand,
    PutRestApiCommand,
    RejectDomainNameAccessAssociationCommand,
    TagResourceCommand,
    TestInvokeAuthorizerCommand,
    TestInvokeMethodCommand,
    UntagResourceCommand,
    UpdateAccountCommand,
    UpdateApiKeyCommand,
    UpdateAuthorizerCommand,
    UpdateBasePathMappingCommand,
    UpdateClientCertificateCommand,
    UpdateDeploymentCommand,
    UpdateDocumentationPartCommand,
    UpdateDocumentationVersionCommand,
    UpdateDomainNameCommand,
    UpdateGatewayResponseCommand,
    UpdateIntegrationCommand,
    UpdateIntegrationResponseCommand,
    UpdateMethodCommand,
    UpdateMethodResponseCommand,
    UpdateModelCommand,
    UpdateRequestValidatorCommand,
    UpdateResourceCommand,
    UpdateRestApiCommand,
    UpdateStageCommand,
    UpdateUsageCommand,
    UpdateUsagePlanCommand,
    UpdateVpcLinkCommand,
};
export class APIGateway extends APIGatewayClient {
}
createAggregatedClient(commands, APIGateway);
