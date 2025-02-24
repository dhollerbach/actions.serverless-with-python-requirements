import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import {
  DomainNameAccessAssociations,
  GetDomainNameAccessAssociationsRequest,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetDomainNameAccessAssociationsCommandInput
  extends GetDomainNameAccessAssociationsRequest {}
export interface GetDomainNameAccessAssociationsCommandOutput
  extends DomainNameAccessAssociations,
    __MetadataBearer {}
declare const GetDomainNameAccessAssociationsCommand_base: {
  new (
    input: GetDomainNameAccessAssociationsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDomainNameAccessAssociationsCommandInput,
    GetDomainNameAccessAssociationsCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetDomainNameAccessAssociationsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetDomainNameAccessAssociationsCommandInput,
    GetDomainNameAccessAssociationsCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDomainNameAccessAssociationsCommand extends GetDomainNameAccessAssociationsCommand_base {
  protected static __types: {
    api: {
      input: GetDomainNameAccessAssociationsRequest;
      output: DomainNameAccessAssociations;
    };
    sdk: {
      input: GetDomainNameAccessAssociationsCommandInput;
      output: GetDomainNameAccessAssociationsCommandOutput;
    };
  };
}
