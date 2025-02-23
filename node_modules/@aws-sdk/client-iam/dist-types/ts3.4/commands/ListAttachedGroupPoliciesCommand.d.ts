import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListAttachedGroupPoliciesRequest,
  ListAttachedGroupPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListAttachedGroupPoliciesCommandInput
  extends ListAttachedGroupPoliciesRequest {}
export interface ListAttachedGroupPoliciesCommandOutput
  extends ListAttachedGroupPoliciesResponse,
    __MetadataBearer {}
declare const ListAttachedGroupPoliciesCommand_base: {
  new (
    input: ListAttachedGroupPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAttachedGroupPoliciesCommandInput,
    ListAttachedGroupPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListAttachedGroupPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAttachedGroupPoliciesCommandInput,
    ListAttachedGroupPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListAttachedGroupPoliciesCommand extends ListAttachedGroupPoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListAttachedGroupPoliciesRequest;
      output: ListAttachedGroupPoliciesResponse;
    };
    sdk: {
      input: ListAttachedGroupPoliciesCommandInput;
      output: ListAttachedGroupPoliciesCommandOutput;
    };
  };
}
