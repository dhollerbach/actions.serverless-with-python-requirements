import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { Account, UpdateAccountRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface UpdateAccountCommandInput extends UpdateAccountRequest {}
export interface UpdateAccountCommandOutput extends Account, __MetadataBearer {}
declare const UpdateAccountCommand_base: {
  new (
    input: UpdateAccountCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAccountCommandInput,
    UpdateAccountCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [UpdateAccountCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAccountCommandInput,
    UpdateAccountCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateAccountCommand extends UpdateAccountCommand_base {
  protected static __types: {
    api: {
      input: UpdateAccountRequest;
      output: Account;
    };
    sdk: {
      input: UpdateAccountCommandInput;
      output: UpdateAccountCommandOutput;
    };
  };
}
