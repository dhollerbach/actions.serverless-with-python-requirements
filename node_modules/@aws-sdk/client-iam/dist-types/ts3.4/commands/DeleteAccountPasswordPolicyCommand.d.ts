import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
export { __MetadataBearer };
export { $Command };
export interface DeleteAccountPasswordPolicyCommandInput {}
export interface DeleteAccountPasswordPolicyCommandOutput
  extends __MetadataBearer {}
declare const DeleteAccountPasswordPolicyCommand_base: {
  new (
    input: DeleteAccountPasswordPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAccountPasswordPolicyCommandInput,
    DeleteAccountPasswordPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DeleteAccountPasswordPolicyCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAccountPasswordPolicyCommandInput,
    DeleteAccountPasswordPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteAccountPasswordPolicyCommand extends DeleteAccountPasswordPolicyCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteAccountPasswordPolicyCommandInput;
      output: DeleteAccountPasswordPolicyCommandOutput;
    };
  };
}
