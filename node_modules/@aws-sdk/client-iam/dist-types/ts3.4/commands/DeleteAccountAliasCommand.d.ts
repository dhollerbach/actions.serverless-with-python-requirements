import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteAccountAliasRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteAccountAliasCommandInput
  extends DeleteAccountAliasRequest {}
export interface DeleteAccountAliasCommandOutput extends __MetadataBearer {}
declare const DeleteAccountAliasCommand_base: {
  new (
    input: DeleteAccountAliasCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAccountAliasCommandInput,
    DeleteAccountAliasCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteAccountAliasCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAccountAliasCommandInput,
    DeleteAccountAliasCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteAccountAliasCommand extends DeleteAccountAliasCommand_base {
  protected static __types: {
    api: {
      input: DeleteAccountAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountAliasCommandInput;
      output: DeleteAccountAliasCommandOutput;
    };
  };
}
