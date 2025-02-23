import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { DomainNames, GetDomainNamesRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetDomainNamesCommandInput extends GetDomainNamesRequest {}
export interface GetDomainNamesCommandOutput
  extends DomainNames,
    __MetadataBearer {}
declare const GetDomainNamesCommand_base: {
  new (
    input: GetDomainNamesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDomainNamesCommandInput,
    GetDomainNamesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetDomainNamesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetDomainNamesCommandInput,
    GetDomainNamesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDomainNamesCommand extends GetDomainNamesCommand_base {
  protected static __types: {
    api: {
      input: GetDomainNamesRequest;
      output: DomainNames;
    };
    sdk: {
      input: GetDomainNamesCommandInput;
      output: GetDomainNamesCommandOutput;
    };
  };
}
