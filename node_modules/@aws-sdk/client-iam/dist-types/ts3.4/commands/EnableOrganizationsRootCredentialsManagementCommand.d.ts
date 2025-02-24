import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  EnableOrganizationsRootCredentialsManagementRequest,
  EnableOrganizationsRootCredentialsManagementResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface EnableOrganizationsRootCredentialsManagementCommandInput
  extends EnableOrganizationsRootCredentialsManagementRequest {}
export interface EnableOrganizationsRootCredentialsManagementCommandOutput
  extends EnableOrganizationsRootCredentialsManagementResponse,
    __MetadataBearer {}
declare const EnableOrganizationsRootCredentialsManagementCommand_base: {
  new (
    input: EnableOrganizationsRootCredentialsManagementCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableOrganizationsRootCredentialsManagementCommandInput,
    EnableOrganizationsRootCredentialsManagementCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [EnableOrganizationsRootCredentialsManagementCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    EnableOrganizationsRootCredentialsManagementCommandInput,
    EnableOrganizationsRootCredentialsManagementCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EnableOrganizationsRootCredentialsManagementCommand extends EnableOrganizationsRootCredentialsManagementCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: EnableOrganizationsRootCredentialsManagementResponse;
    };
    sdk: {
      input: EnableOrganizationsRootCredentialsManagementCommandInput;
      output: EnableOrganizationsRootCredentialsManagementCommandOutput;
    };
  };
}
