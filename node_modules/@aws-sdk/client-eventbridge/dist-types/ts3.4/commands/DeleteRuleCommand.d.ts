import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { DeleteRuleRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteRuleCommandInput extends DeleteRuleRequest {}
export interface DeleteRuleCommandOutput extends __MetadataBearer {}
declare const DeleteRuleCommand_base: {
  new (
    input: DeleteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRuleCommandInput,
    DeleteRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRuleCommandInput,
    DeleteRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteRuleCommand extends DeleteRuleCommand_base {
  protected static __types: {
    api: {
      input: DeleteRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteRuleCommandInput;
      output: DeleteRuleCommandOutput;
    };
  };
}
