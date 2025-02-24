import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreatePartnerEventSourceCommandInput
  extends CreatePartnerEventSourceRequest {}
export interface CreatePartnerEventSourceCommandOutput
  extends CreatePartnerEventSourceResponse,
    __MetadataBearer {}
declare const CreatePartnerEventSourceCommand_base: {
  new (
    input: CreatePartnerEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreatePartnerEventSourceCommandInput,
    CreatePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreatePartnerEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreatePartnerEventSourceCommandInput,
    CreatePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreatePartnerEventSourceCommand extends CreatePartnerEventSourceCommand_base {
  protected static __types: {
    api: {
      input: CreatePartnerEventSourceRequest;
      output: CreatePartnerEventSourceResponse;
    };
    sdk: {
      input: CreatePartnerEventSourceCommandInput;
      output: CreatePartnerEventSourceCommandOutput;
    };
  };
}
