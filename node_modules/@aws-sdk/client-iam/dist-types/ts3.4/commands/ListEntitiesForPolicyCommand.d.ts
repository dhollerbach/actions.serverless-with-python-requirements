import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListEntitiesForPolicyRequest,
  ListEntitiesForPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListEntitiesForPolicyCommandInput
  extends ListEntitiesForPolicyRequest {}
export interface ListEntitiesForPolicyCommandOutput
  extends ListEntitiesForPolicyResponse,
    __MetadataBearer {}
declare const ListEntitiesForPolicyCommand_base: {
  new (
    input: ListEntitiesForPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListEntitiesForPolicyCommandInput,
    ListEntitiesForPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListEntitiesForPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListEntitiesForPolicyCommandInput,
    ListEntitiesForPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListEntitiesForPolicyCommand extends ListEntitiesForPolicyCommand_base {
  protected static __types: {
    api: {
      input: ListEntitiesForPolicyRequest;
      output: ListEntitiesForPolicyResponse;
    };
    sdk: {
      input: ListEntitiesForPolicyCommandInput;
      output: ListEntitiesForPolicyCommandOutput;
    };
  };
}
