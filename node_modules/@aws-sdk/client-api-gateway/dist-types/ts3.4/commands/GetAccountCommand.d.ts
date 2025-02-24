import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { Account, GetAccountRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetAccountCommandInput extends GetAccountRequest {}
export interface GetAccountCommandOutput extends Account, __MetadataBearer {}
declare const GetAccountCommand_base: {
  new (
    input: GetAccountCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountCommandInput,
    GetAccountCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetAccountCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountCommandInput,
    GetAccountCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetAccountCommand extends GetAccountCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: Account;
    };
    sdk: {
      input: GetAccountCommandInput;
      output: GetAccountCommandOutput;
    };
  };
}
