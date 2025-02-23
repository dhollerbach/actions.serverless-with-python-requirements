import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { CreateAccountAliasRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateAccountAliasCommandInput
  extends CreateAccountAliasRequest {}
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {}
declare const CreateAccountAliasCommand_base: {
  new (
    input: CreateAccountAliasCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateAccountAliasCommandInput,
    CreateAccountAliasCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateAccountAliasCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateAccountAliasCommandInput,
    CreateAccountAliasCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateAccountAliasCommand extends CreateAccountAliasCommand_base {
  protected static __types: {
    api: {
      input: CreateAccountAliasRequest;
      output: {};
    };
    sdk: {
      input: CreateAccountAliasCommandInput;
      output: CreateAccountAliasCommandOutput;
    };
  };
}
