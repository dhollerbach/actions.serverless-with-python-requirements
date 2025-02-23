import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  DisableOrganizationsRootSessionsRequest,
  DisableOrganizationsRootSessionsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DisableOrganizationsRootSessionsCommandInput
  extends DisableOrganizationsRootSessionsRequest {}
export interface DisableOrganizationsRootSessionsCommandOutput
  extends DisableOrganizationsRootSessionsResponse,
    __MetadataBearer {}
declare const DisableOrganizationsRootSessionsCommand_base: {
  new (
    input: DisableOrganizationsRootSessionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableOrganizationsRootSessionsCommandInput,
    DisableOrganizationsRootSessionsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DisableOrganizationsRootSessionsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DisableOrganizationsRootSessionsCommandInput,
    DisableOrganizationsRootSessionsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DisableOrganizationsRootSessionsCommand extends DisableOrganizationsRootSessionsCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: DisableOrganizationsRootSessionsResponse;
    };
    sdk: {
      input: DisableOrganizationsRootSessionsCommandInput;
      output: DisableOrganizationsRootSessionsCommandOutput;
    };
  };
}
