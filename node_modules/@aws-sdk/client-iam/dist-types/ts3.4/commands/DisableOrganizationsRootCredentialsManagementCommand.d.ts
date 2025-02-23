import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  DisableOrganizationsRootCredentialsManagementRequest,
  DisableOrganizationsRootCredentialsManagementResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DisableOrganizationsRootCredentialsManagementCommandInput
  extends DisableOrganizationsRootCredentialsManagementRequest {}
export interface DisableOrganizationsRootCredentialsManagementCommandOutput
  extends DisableOrganizationsRootCredentialsManagementResponse,
    __MetadataBearer {}
declare const DisableOrganizationsRootCredentialsManagementCommand_base: {
  new (
    input: DisableOrganizationsRootCredentialsManagementCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableOrganizationsRootCredentialsManagementCommandInput,
    DisableOrganizationsRootCredentialsManagementCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DisableOrganizationsRootCredentialsManagementCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DisableOrganizationsRootCredentialsManagementCommandInput,
    DisableOrganizationsRootCredentialsManagementCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DisableOrganizationsRootCredentialsManagementCommand extends DisableOrganizationsRootCredentialsManagementCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: DisableOrganizationsRootCredentialsManagementResponse;
    };
    sdk: {
      input: DisableOrganizationsRootCredentialsManagementCommandInput;
      output: DisableOrganizationsRootCredentialsManagementCommandOutput;
    };
  };
}
