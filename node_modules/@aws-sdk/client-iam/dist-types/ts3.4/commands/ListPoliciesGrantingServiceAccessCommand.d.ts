import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListPoliciesGrantingServiceAccessCommandInput
  extends ListPoliciesGrantingServiceAccessRequest {}
export interface ListPoliciesGrantingServiceAccessCommandOutput
  extends ListPoliciesGrantingServiceAccessResponse,
    __MetadataBearer {}
declare const ListPoliciesGrantingServiceAccessCommand_base: {
  new (
    input: ListPoliciesGrantingServiceAccessCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPoliciesGrantingServiceAccessCommandInput,
    ListPoliciesGrantingServiceAccessCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListPoliciesGrantingServiceAccessCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPoliciesGrantingServiceAccessCommandInput,
    ListPoliciesGrantingServiceAccessCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListPoliciesGrantingServiceAccessCommand extends ListPoliciesGrantingServiceAccessCommand_base {
  protected static __types: {
    api: {
      input: ListPoliciesGrantingServiceAccessRequest;
      output: ListPoliciesGrantingServiceAccessResponse;
    };
    sdk: {
      input: ListPoliciesGrantingServiceAccessCommandInput;
      output: ListPoliciesGrantingServiceAccessCommandOutput;
    };
  };
}
