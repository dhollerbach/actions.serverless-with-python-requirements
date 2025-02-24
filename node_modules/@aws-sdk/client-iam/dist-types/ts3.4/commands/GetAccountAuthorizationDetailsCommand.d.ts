import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetAccountAuthorizationDetailsRequest,
  GetAccountAuthorizationDetailsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetAccountAuthorizationDetailsCommandInput
  extends GetAccountAuthorizationDetailsRequest {}
export interface GetAccountAuthorizationDetailsCommandOutput
  extends GetAccountAuthorizationDetailsResponse,
    __MetadataBearer {}
declare const GetAccountAuthorizationDetailsCommand_base: {
  new (
    input: GetAccountAuthorizationDetailsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountAuthorizationDetailsCommandInput,
    GetAccountAuthorizationDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetAccountAuthorizationDetailsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountAuthorizationDetailsCommandInput,
    GetAccountAuthorizationDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetAccountAuthorizationDetailsCommand extends GetAccountAuthorizationDetailsCommand_base {
  protected static __types: {
    api: {
      input: GetAccountAuthorizationDetailsRequest;
      output: GetAccountAuthorizationDetailsResponse;
    };
    sdk: {
      input: GetAccountAuthorizationDetailsCommandInput;
      output: GetAccountAuthorizationDetailsCommandOutput;
    };
  };
}
