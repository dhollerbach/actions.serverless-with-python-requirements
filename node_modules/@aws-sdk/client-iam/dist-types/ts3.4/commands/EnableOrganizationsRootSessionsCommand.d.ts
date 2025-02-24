import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  EnableOrganizationsRootSessionsRequest,
  EnableOrganizationsRootSessionsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface EnableOrganizationsRootSessionsCommandInput
  extends EnableOrganizationsRootSessionsRequest {}
export interface EnableOrganizationsRootSessionsCommandOutput
  extends EnableOrganizationsRootSessionsResponse,
    __MetadataBearer {}
declare const EnableOrganizationsRootSessionsCommand_base: {
  new (
    input: EnableOrganizationsRootSessionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableOrganizationsRootSessionsCommandInput,
    EnableOrganizationsRootSessionsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [EnableOrganizationsRootSessionsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    EnableOrganizationsRootSessionsCommandInput,
    EnableOrganizationsRootSessionsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EnableOrganizationsRootSessionsCommand extends EnableOrganizationsRootSessionsCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: EnableOrganizationsRootSessionsResponse;
    };
    sdk: {
      input: EnableOrganizationsRootSessionsCommandInput;
      output: EnableOrganizationsRootSessionsCommandOutput;
    };
  };
}
