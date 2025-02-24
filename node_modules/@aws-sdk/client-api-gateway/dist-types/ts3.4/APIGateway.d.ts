import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
import { APIGatewayClient } from "./APIGatewayClient";
import {
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
} from "./commands/CreateApiKeyCommand";
import {
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
} from "./commands/CreateAuthorizerCommand";
import {
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "./commands/CreateBasePathMappingCommand";
import {
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "./commands/CreateDocumentationPartCommand";
import {
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "./commands/CreateDocumentationVersionCommand";
import {
  CreateDomainNameAccessAssociationCommandInput,
  CreateDomainNameAccessAssociationCommandOutput,
} from "./commands/CreateDomainNameAccessAssociationCommand";
import {
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput,
} from "./commands/CreateDomainNameCommand";
import {
  CreateModelCommandInput,
  CreateModelCommandOutput,
} from "./commands/CreateModelCommand";
import {
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "./commands/CreateRequestValidatorCommand";
import {
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
} from "./commands/CreateResourceCommand";
import {
  CreateRestApiCommandInput,
  CreateRestApiCommandOutput,
} from "./commands/CreateRestApiCommand";
import {
  CreateStageCommandInput,
  CreateStageCommandOutput,
} from "./commands/CreateStageCommand";
import {
  CreateUsagePlanCommandInput,
  CreateUsagePlanCommandOutput,
} from "./commands/CreateUsagePlanCommand";
import {
  CreateUsagePlanKeyCommandInput,
  CreateUsagePlanKeyCommandOutput,
} from "./commands/CreateUsagePlanKeyCommand";
import {
  CreateVpcLinkCommandInput,
  CreateVpcLinkCommandOutput,
} from "./commands/CreateVpcLinkCommand";
import {
  DeleteApiKeyCommandInput,
  DeleteApiKeyCommandOutput,
} from "./commands/DeleteApiKeyCommand";
import {
  DeleteAuthorizerCommandInput,
  DeleteAuthorizerCommandOutput,
} from "./commands/DeleteAuthorizerCommand";
import {
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "./commands/DeleteBasePathMappingCommand";
import {
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "./commands/DeleteClientCertificateCommand";
import {
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "./commands/DeleteDocumentationPartCommand";
import {
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "./commands/DeleteDocumentationVersionCommand";
import {
  DeleteDomainNameAccessAssociationCommandInput,
  DeleteDomainNameAccessAssociationCommandOutput,
} from "./commands/DeleteDomainNameAccessAssociationCommand";
import {
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput,
} from "./commands/DeleteDomainNameCommand";
import {
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "./commands/DeleteGatewayResponseCommand";
import {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import {
  DeleteMethodCommandInput,
  DeleteMethodCommandOutput,
} from "./commands/DeleteMethodCommand";
import {
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "./commands/DeleteMethodResponseCommand";
import {
  DeleteModelCommandInput,
  DeleteModelCommandOutput,
} from "./commands/DeleteModelCommand";
import {
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "./commands/DeleteRequestValidatorCommand";
import {
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
} from "./commands/DeleteResourceCommand";
import {
  DeleteRestApiCommandInput,
  DeleteRestApiCommandOutput,
} from "./commands/DeleteRestApiCommand";
import {
  DeleteStageCommandInput,
  DeleteStageCommandOutput,
} from "./commands/DeleteStageCommand";
import {
  DeleteUsagePlanCommandInput,
  DeleteUsagePlanCommandOutput,
} from "./commands/DeleteUsagePlanCommand";
import {
  DeleteUsagePlanKeyCommandInput,
  DeleteUsagePlanKeyCommandOutput,
} from "./commands/DeleteUsagePlanKeyCommand";
import {
  DeleteVpcLinkCommandInput,
  DeleteVpcLinkCommandOutput,
} from "./commands/DeleteVpcLinkCommand";
import {
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "./commands/FlushStageAuthorizersCacheCommand";
import {
  FlushStageCacheCommandInput,
  FlushStageCacheCommandOutput,
} from "./commands/FlushStageCacheCommand";
import {
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "./commands/GenerateClientCertificateCommand";
import {
  GetAccountCommandInput,
  GetAccountCommandOutput,
} from "./commands/GetAccountCommand";
import {
  GetApiKeyCommandInput,
  GetApiKeyCommandOutput,
} from "./commands/GetApiKeyCommand";
import {
  GetApiKeysCommandInput,
  GetApiKeysCommandOutput,
} from "./commands/GetApiKeysCommand";
import {
  GetAuthorizerCommandInput,
  GetAuthorizerCommandOutput,
} from "./commands/GetAuthorizerCommand";
import {
  GetAuthorizersCommandInput,
  GetAuthorizersCommandOutput,
} from "./commands/GetAuthorizersCommand";
import {
  GetBasePathMappingCommandInput,
  GetBasePathMappingCommandOutput,
} from "./commands/GetBasePathMappingCommand";
import {
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "./commands/GetBasePathMappingsCommand";
import {
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "./commands/GetClientCertificateCommand";
import {
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "./commands/GetClientCertificatesCommand";
import {
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput,
} from "./commands/GetDeploymentsCommand";
import {
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "./commands/GetDocumentationPartCommand";
import {
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "./commands/GetDocumentationPartsCommand";
import {
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "./commands/GetDocumentationVersionCommand";
import {
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "./commands/GetDocumentationVersionsCommand";
import {
  GetDomainNameAccessAssociationsCommandInput,
  GetDomainNameAccessAssociationsCommandOutput,
} from "./commands/GetDomainNameAccessAssociationsCommand";
import {
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
} from "./commands/GetDomainNameCommand";
import {
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
} from "./commands/GetDomainNamesCommand";
import {
  GetExportCommandInput,
  GetExportCommandOutput,
} from "./commands/GetExportCommand";
import {
  GetGatewayResponseCommandInput,
  GetGatewayResponseCommandOutput,
} from "./commands/GetGatewayResponseCommand";
import {
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "./commands/GetGatewayResponsesCommand";
import {
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
} from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import {
  GetMethodCommandInput,
  GetMethodCommandOutput,
} from "./commands/GetMethodCommand";
import {
  GetMethodResponseCommandInput,
  GetMethodResponseCommandOutput,
} from "./commands/GetMethodResponseCommand";
import {
  GetModelCommandInput,
  GetModelCommandOutput,
} from "./commands/GetModelCommand";
import {
  GetModelsCommandInput,
  GetModelsCommandOutput,
} from "./commands/GetModelsCommand";
import {
  GetModelTemplateCommandInput,
  GetModelTemplateCommandOutput,
} from "./commands/GetModelTemplateCommand";
import {
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "./commands/GetRequestValidatorCommand";
import {
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "./commands/GetRequestValidatorsCommand";
import {
  GetResourceCommandInput,
  GetResourceCommandOutput,
} from "./commands/GetResourceCommand";
import {
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "./commands/GetResourcesCommand";
import {
  GetRestApiCommandInput,
  GetRestApiCommandOutput,
} from "./commands/GetRestApiCommand";
import {
  GetRestApisCommandInput,
  GetRestApisCommandOutput,
} from "./commands/GetRestApisCommand";
import {
  GetSdkCommandInput,
  GetSdkCommandOutput,
} from "./commands/GetSdkCommand";
import {
  GetSdkTypeCommandInput,
  GetSdkTypeCommandOutput,
} from "./commands/GetSdkTypeCommand";
import {
  GetSdkTypesCommandInput,
  GetSdkTypesCommandOutput,
} from "./commands/GetSdkTypesCommand";
import {
  GetStageCommandInput,
  GetStageCommandOutput,
} from "./commands/GetStageCommand";
import {
  GetStagesCommandInput,
  GetStagesCommandOutput,
} from "./commands/GetStagesCommand";
import {
  GetTagsCommandInput,
  GetTagsCommandOutput,
} from "./commands/GetTagsCommand";
import {
  GetUsageCommandInput,
  GetUsageCommandOutput,
} from "./commands/GetUsageCommand";
import {
  GetUsagePlanCommandInput,
  GetUsagePlanCommandOutput,
} from "./commands/GetUsagePlanCommand";
import {
  GetUsagePlanKeyCommandInput,
  GetUsagePlanKeyCommandOutput,
} from "./commands/GetUsagePlanKeyCommand";
import {
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput,
} from "./commands/GetUsagePlanKeysCommand";
import {
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
} from "./commands/GetUsagePlansCommand";
import {
  GetVpcLinkCommandInput,
  GetVpcLinkCommandOutput,
} from "./commands/GetVpcLinkCommand";
import {
  GetVpcLinksCommandInput,
  GetVpcLinksCommandOutput,
} from "./commands/GetVpcLinksCommand";
import {
  ImportApiKeysCommandInput,
  ImportApiKeysCommandOutput,
} from "./commands/ImportApiKeysCommand";
import {
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "./commands/ImportDocumentationPartsCommand";
import {
  ImportRestApiCommandInput,
  ImportRestApiCommandOutput,
} from "./commands/ImportRestApiCommand";
import {
  PutGatewayResponseCommandInput,
  PutGatewayResponseCommandOutput,
} from "./commands/PutGatewayResponseCommand";
import {
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
} from "./commands/PutIntegrationCommand";
import {
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "./commands/PutIntegrationResponseCommand";
import {
  PutMethodCommandInput,
  PutMethodCommandOutput,
} from "./commands/PutMethodCommand";
import {
  PutMethodResponseCommandInput,
  PutMethodResponseCommandOutput,
} from "./commands/PutMethodResponseCommand";
import {
  PutRestApiCommandInput,
  PutRestApiCommandOutput,
} from "./commands/PutRestApiCommand";
import {
  RejectDomainNameAccessAssociationCommandInput,
  RejectDomainNameAccessAssociationCommandOutput,
} from "./commands/RejectDomainNameAccessAssociationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "./commands/TagResourceCommand";
import {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import {
  TestInvokeMethodCommandInput,
  TestInvokeMethodCommandOutput,
} from "./commands/TestInvokeMethodCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountCommandInput,
  UpdateAccountCommandOutput,
} from "./commands/UpdateAccountCommand";
import {
  UpdateApiKeyCommandInput,
  UpdateApiKeyCommandOutput,
} from "./commands/UpdateApiKeyCommand";
import {
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput,
} from "./commands/UpdateAuthorizerCommand";
import {
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "./commands/UpdateBasePathMappingCommand";
import {
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "./commands/UpdateClientCertificateCommand";
import {
  UpdateDeploymentCommandInput,
  UpdateDeploymentCommandOutput,
} from "./commands/UpdateDeploymentCommand";
import {
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "./commands/UpdateDocumentationPartCommand";
import {
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "./commands/UpdateDocumentationVersionCommand";
import {
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput,
} from "./commands/UpdateDomainNameCommand";
import {
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "./commands/UpdateGatewayResponseCommand";
import {
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput,
} from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import {
  UpdateMethodCommandInput,
  UpdateMethodCommandOutput,
} from "./commands/UpdateMethodCommand";
import {
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "./commands/UpdateMethodResponseCommand";
import {
  UpdateModelCommandInput,
  UpdateModelCommandOutput,
} from "./commands/UpdateModelCommand";
import {
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "./commands/UpdateRequestValidatorCommand";
import {
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import {
  UpdateRestApiCommandInput,
  UpdateRestApiCommandOutput,
} from "./commands/UpdateRestApiCommand";
import {
  UpdateStageCommandInput,
  UpdateStageCommandOutput,
} from "./commands/UpdateStageCommand";
import {
  UpdateUsageCommandInput,
  UpdateUsageCommandOutput,
} from "./commands/UpdateUsageCommand";
import {
  UpdateUsagePlanCommandInput,
  UpdateUsagePlanCommandOutput,
} from "./commands/UpdateUsagePlanCommand";
import {
  UpdateVpcLinkCommandInput,
  UpdateVpcLinkCommandOutput,
} from "./commands/UpdateVpcLinkCommand";
export interface APIGateway {
  createApiKey(): Promise<CreateApiKeyCommandOutput>;
  createApiKey(
    args: CreateApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiKeyCommandOutput>;
  createApiKey(
    args: CreateApiKeyCommandInput,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;
  createApiKey(
    args: CreateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthorizerCommandOutput>;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBasePathMappingCommandOutput>;
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationPartCommandOutput>;
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationVersionCommandOutput>;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;
  createDomainName(
    args: CreateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainNameCommandOutput>;
  createDomainName(
    args: CreateDomainNameCommandInput,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  createDomainName(
    args: CreateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  createDomainNameAccessAssociation(
    args: CreateDomainNameAccessAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainNameAccessAssociationCommandOutput>;
  createDomainNameAccessAssociation(
    args: CreateDomainNameAccessAssociationCommandInput,
    cb: (
      err: any,
      data?: CreateDomainNameAccessAssociationCommandOutput
    ) => void
  ): void;
  createDomainNameAccessAssociation(
    args: CreateDomainNameAccessAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateDomainNameAccessAssociationCommandOutput
    ) => void
  ): void;
  createModel(
    args: CreateModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCommandOutput>;
  createModel(
    args: CreateModelCommandInput,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRequestValidatorCommandOutput>;
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;
  createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  createResource(
    args: CreateResourceCommandInput,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  createRestApi(
    args: CreateRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRestApiCommandOutput>;
  createRestApi(
    args: CreateRestApiCommandInput,
    cb: (err: any, data?: CreateRestApiCommandOutput) => void
  ): void;
  createRestApi(
    args: CreateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestApiCommandOutput) => void
  ): void;
  createStage(
    args: CreateStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStageCommandOutput>;
  createStage(
    args: CreateStageCommandInput,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanCommandOutput>;
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    cb: (err: any, data?: CreateUsagePlanCommandOutput) => void
  ): void;
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanCommandOutput) => void
  ): void;
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanKeyCommandOutput>;
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcLinkCommandOutput>;
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiKeyCommandOutput>;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthorizerCommandOutput>;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBasePathMappingCommandOutput>;
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientCertificateCommandOutput>;
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationPartCommandOutput>;
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationVersionCommandOutput>;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainNameCommandOutput>;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  deleteDomainNameAccessAssociation(
    args: DeleteDomainNameAccessAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainNameAccessAssociationCommandOutput>;
  deleteDomainNameAccessAssociation(
    args: DeleteDomainNameAccessAssociationCommandInput,
    cb: (
      err: any,
      data?: DeleteDomainNameAccessAssociationCommandOutput
    ) => void
  ): void;
  deleteDomainNameAccessAssociation(
    args: DeleteDomainNameAccessAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DeleteDomainNameAccessAssociationCommandOutput
    ) => void
  ): void;
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayResponseCommandOutput>;
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationResponseCommandOutput>;
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;
  deleteMethod(
    args: DeleteMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMethodCommandOutput>;
  deleteMethod(
    args: DeleteMethodCommandInput,
    cb: (err: any, data?: DeleteMethodCommandOutput) => void
  ): void;
  deleteMethod(
    args: DeleteMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodCommandOutput) => void
  ): void;
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMethodResponseCommandOutput>;
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelCommandOutput>;
  deleteModel(
    args: DeleteModelCommandInput,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRequestValidatorCommandOutput>;
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;
  deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  deleteResource(
    args: DeleteResourceCommandInput,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  deleteRestApi(
    args: DeleteRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRestApiCommandOutput>;
  deleteRestApi(
    args: DeleteRestApiCommandInput,
    cb: (err: any, data?: DeleteRestApiCommandOutput) => void
  ): void;
  deleteRestApi(
    args: DeleteRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRestApiCommandOutput) => void
  ): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStageCommandOutput>;
  deleteStage(
    args: DeleteStageCommandInput,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanCommandOutput>;
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void
  ): void;
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void
  ): void;
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanKeyCommandOutput>;
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcLinkCommandOutput>;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageAuthorizersCacheCommandOutput>;
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;
  flushStageCache(
    args: FlushStageCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageCacheCommandOutput>;
  flushStageCache(
    args: FlushStageCacheCommandInput,
    cb: (err: any, data?: FlushStageCacheCommandOutput) => void
  ): void;
  flushStageCache(
    args: FlushStageCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageCacheCommandOutput) => void
  ): void;
  generateClientCertificate(): Promise<GenerateClientCertificateCommandOutput>;
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateClientCertificateCommandOutput>;
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;
  getAccount(): Promise<GetAccountCommandOutput>;
  getAccount(
    args: GetAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountCommandOutput>;
  getAccount(
    args: GetAccountCommandInput,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  getApiKey(
    args: GetApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiKeyCommandOutput>;
  getApiKey(
    args: GetApiKeyCommandInput,
    cb: (err: any, data?: GetApiKeyCommandOutput) => void
  ): void;
  getApiKey(
    args: GetApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeyCommandOutput) => void
  ): void;
  getApiKeys(): Promise<GetApiKeysCommandOutput>;
  getApiKeys(
    args: GetApiKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiKeysCommandOutput>;
  getApiKeys(
    args: GetApiKeysCommandInput,
    cb: (err: any, data?: GetApiKeysCommandOutput) => void
  ): void;
  getApiKeys(
    args: GetApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeysCommandOutput) => void
  ): void;
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizerCommandOutput>;
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizersCommandOutput>;
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingCommandOutput>;
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingsCommandOutput>;
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificateCommandOutput>;
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;
  getClientCertificates(): Promise<GetClientCertificatesCommandOutput>;
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificatesCommandOutput>;
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployments(
    args: GetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentsCommandOutput>;
  getDeployments(
    args: GetDeploymentsCommandInput,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  getDeployments(
    args: GetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartCommandOutput>;
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartsCommandOutput>;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionCommandOutput>;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionsCommandOutput>;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNameCommandOutput>;
  getDomainName(
    args: GetDomainNameCommandInput,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  getDomainNameAccessAssociations(): Promise<GetDomainNameAccessAssociationsCommandOutput>;
  getDomainNameAccessAssociations(
    args: GetDomainNameAccessAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNameAccessAssociationsCommandOutput>;
  getDomainNameAccessAssociations(
    args: GetDomainNameAccessAssociationsCommandInput,
    cb: (err: any, data?: GetDomainNameAccessAssociationsCommandOutput) => void
  ): void;
  getDomainNameAccessAssociations(
    args: GetDomainNameAccessAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameAccessAssociationsCommandOutput) => void
  ): void;
  getDomainNames(): Promise<GetDomainNamesCommandOutput>;
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNamesCommandOutput>;
  getDomainNames(
    args: GetDomainNamesCommandInput,
    cb: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): void;
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): void;
  getExport(
    args: GetExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExportCommandOutput>;
  getExport(
    args: GetExportCommandInput,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;
  getExport(
    args: GetExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponseCommandOutput>;
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponsesCommandOutput>;
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResponseCommandOutput>;
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;
  getMethod(
    args: GetMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMethodCommandOutput>;
  getMethod(
    args: GetMethodCommandInput,
    cb: (err: any, data?: GetMethodCommandOutput) => void
  ): void;
  getMethod(
    args: GetMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodCommandOutput) => void
  ): void;
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMethodResponseCommandOutput>;
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;
  getModel(
    args: GetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelCommandOutput>;
  getModel(
    args: GetModelCommandInput,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;
  getModel(
    args: GetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;
  getModels(
    args: GetModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelsCommandOutput>;
  getModels(
    args: GetModelsCommandInput,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelTemplateCommandOutput>;
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorCommandOutput>;
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorsCommandOutput>;
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;
  getResource(
    args: GetResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceCommandOutput>;
  getResource(
    args: GetResourceCommandInput,
    cb: (err: any, data?: GetResourceCommandOutput) => void
  ): void;
  getResource(
    args: GetResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCommandOutput) => void
  ): void;
  getResources(
    args: GetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesCommandOutput>;
  getResources(
    args: GetResourcesCommandInput,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  getRestApi(
    args: GetRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRestApiCommandOutput>;
  getRestApi(
    args: GetRestApiCommandInput,
    cb: (err: any, data?: GetRestApiCommandOutput) => void
  ): void;
  getRestApi(
    args: GetRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApiCommandOutput) => void
  ): void;
  getRestApis(): Promise<GetRestApisCommandOutput>;
  getRestApis(
    args: GetRestApisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRestApisCommandOutput>;
  getRestApis(
    args: GetRestApisCommandInput,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;
  getRestApis(
    args: GetRestApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;
  getSdk(
    args: GetSdkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSdkCommandOutput>;
  getSdk(
    args: GetSdkCommandInput,
    cb: (err: any, data?: GetSdkCommandOutput) => void
  ): void;
  getSdk(
    args: GetSdkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkCommandOutput) => void
  ): void;
  getSdkType(
    args: GetSdkTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSdkTypeCommandOutput>;
  getSdkType(
    args: GetSdkTypeCommandInput,
    cb: (err: any, data?: GetSdkTypeCommandOutput) => void
  ): void;
  getSdkType(
    args: GetSdkTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypeCommandOutput) => void
  ): void;
  getSdkTypes(): Promise<GetSdkTypesCommandOutput>;
  getSdkTypes(
    args: GetSdkTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSdkTypesCommandOutput>;
  getSdkTypes(
    args: GetSdkTypesCommandInput,
    cb: (err: any, data?: GetSdkTypesCommandOutput) => void
  ): void;
  getSdkTypes(
    args: GetSdkTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypesCommandOutput) => void
  ): void;
  getStage(
    args: GetStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStageCommandOutput>;
  getStage(
    args: GetStageCommandInput,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  getStages(
    args: GetStagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStagesCommandOutput>;
  getStages(
    args: GetStagesCommandInput,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;
  getStages(
    args: GetStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;
  getTags(
    args: GetTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagsCommandOutput>;
  getTags(
    args: GetTagsCommandInput,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  getUsage(
    args: GetUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageCommandOutput>;
  getUsage(
    args: GetUsageCommandInput,
    cb: (err: any, data?: GetUsageCommandOutput) => void
  ): void;
  getUsage(
    args: GetUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageCommandOutput) => void
  ): void;
  getUsagePlan(
    args: GetUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanCommandOutput>;
  getUsagePlan(
    args: GetUsagePlanCommandInput,
    cb: (err: any, data?: GetUsagePlanCommandOutput) => void
  ): void;
  getUsagePlan(
    args: GetUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanCommandOutput) => void
  ): void;
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeyCommandOutput>;
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void
  ): void;
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void
  ): void;
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeysCommandOutput>;
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;
  getUsagePlans(): Promise<GetUsagePlansCommandOutput>;
  getUsagePlans(
    args: GetUsagePlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlansCommandOutput>;
  getUsagePlans(
    args: GetUsagePlansCommandInput,
    cb: (err: any, data?: GetUsagePlansCommandOutput) => void
  ): void;
  getUsagePlans(
    args: GetUsagePlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlansCommandOutput) => void
  ): void;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpcLinkCommandOutput>;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;
  getVpcLinks(): Promise<GetVpcLinksCommandOutput>;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpcLinksCommandOutput>;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;
  importApiKeys(
    args: ImportApiKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportApiKeysCommandOutput>;
  importApiKeys(
    args: ImportApiKeysCommandInput,
    cb: (err: any, data?: ImportApiKeysCommandOutput) => void
  ): void;
  importApiKeys(
    args: ImportApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiKeysCommandOutput) => void
  ): void;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDocumentationPartsCommandOutput>;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;
  importRestApi(
    args: ImportRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportRestApiCommandOutput>;
  importRestApi(
    args: ImportRestApiCommandInput,
    cb: (err: any, data?: ImportRestApiCommandOutput) => void
  ): void;
  importRestApi(
    args: ImportRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportRestApiCommandOutput) => void
  ): void;
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGatewayResponseCommandOutput>;
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(
    args: PutIntegrationCommandInput,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationResponseCommandOutput>;
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;
  putMethod(
    args: PutMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMethodCommandOutput>;
  putMethod(
    args: PutMethodCommandInput,
    cb: (err: any, data?: PutMethodCommandOutput) => void
  ): void;
  putMethod(
    args: PutMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodCommandOutput) => void
  ): void;
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMethodResponseCommandOutput>;
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;
  putRestApi(
    args: PutRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRestApiCommandOutput>;
  putRestApi(
    args: PutRestApiCommandInput,
    cb: (err: any, data?: PutRestApiCommandOutput) => void
  ): void;
  putRestApi(
    args: PutRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRestApiCommandOutput) => void
  ): void;
  rejectDomainNameAccessAssociation(
    args: RejectDomainNameAccessAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectDomainNameAccessAssociationCommandOutput>;
  rejectDomainNameAccessAssociation(
    args: RejectDomainNameAccessAssociationCommandInput,
    cb: (
      err: any,
      data?: RejectDomainNameAccessAssociationCommandOutput
    ) => void
  ): void;
  rejectDomainNameAccessAssociation(
    args: RejectDomainNameAccessAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: RejectDomainNameAccessAssociationCommandOutput
    ) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeAuthorizerCommandOutput>;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeMethodCommandOutput>;
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  updateAccount(): Promise<UpdateAccountCommandOutput>;
  updateAccount(
    args: UpdateAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountCommandOutput>;
  updateAccount(
    args: UpdateAccountCommandInput,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  updateAccount(
    args: UpdateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiKeyCommandOutput>;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthorizerCommandOutput>;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBasePathMappingCommandOutput>;
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClientCertificateCommandOutput>;
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentCommandOutput>;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationPartCommandOutput>;
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationVersionCommandOutput>;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainNameCommandOutput>;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayResponseCommandOutput>;
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationResponseCommandOutput>;
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;
  updateMethod(
    args: UpdateMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMethodCommandOutput>;
  updateMethod(
    args: UpdateMethodCommandInput,
    cb: (err: any, data?: UpdateMethodCommandOutput) => void
  ): void;
  updateMethod(
    args: UpdateMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodCommandOutput) => void
  ): void;
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMethodResponseCommandOutput>;
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;
  updateModel(
    args: UpdateModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelCommandOutput>;
  updateModel(
    args: UpdateModelCommandInput,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRequestValidatorCommandOutput>;
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;
  updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  updateResource(
    args: UpdateResourceCommandInput,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  updateRestApi(
    args: UpdateRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRestApiCommandOutput>;
  updateRestApi(
    args: UpdateRestApiCommandInput,
    cb: (err: any, data?: UpdateRestApiCommandOutput) => void
  ): void;
  updateRestApi(
    args: UpdateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRestApiCommandOutput) => void
  ): void;
  updateStage(
    args: UpdateStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStageCommandOutput>;
  updateStage(
    args: UpdateStageCommandInput,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  updateUsage(
    args: UpdateUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsageCommandOutput>;
  updateUsage(
    args: UpdateUsageCommandInput,
    cb: (err: any, data?: UpdateUsageCommandOutput) => void
  ): void;
  updateUsage(
    args: UpdateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsageCommandOutput) => void
  ): void;
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsagePlanCommandOutput>;
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void
  ): void;
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void
  ): void;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcLinkCommandOutput>;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
}
export declare class APIGateway
  extends APIGatewayClient
  implements APIGateway {}
