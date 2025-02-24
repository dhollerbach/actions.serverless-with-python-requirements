import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { DeletePartnerEventSourceRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeletePartnerEventSourceCommandInput
  extends DeletePartnerEventSourceRequest {}
export interface DeletePartnerEventSourceCommandOutput
  extends __MetadataBearer {}
declare const DeletePartnerEventSourceCommand_base: {
  new (
    input: DeletePartnerEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeletePartnerEventSourceCommandInput,
    DeletePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeletePartnerEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeletePartnerEventSourceCommandInput,
    DeletePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeletePartnerEventSourceCommand extends DeletePartnerEventSourceCommand_base {
  protected static __types: {
    api: {
      input: DeletePartnerEventSourceRequest;
      output: {};
    };
    sdk: {
      input: DeletePartnerEventSourceCommandInput;
      output: DeletePartnerEventSourceCommandOutput;
    };
  };
}
