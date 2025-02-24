import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListOrganizationsFeaturesRequest,
  ListOrganizationsFeaturesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListOrganizationsFeaturesCommandInput
  extends ListOrganizationsFeaturesRequest {}
export interface ListOrganizationsFeaturesCommandOutput
  extends ListOrganizationsFeaturesResponse,
    __MetadataBearer {}
declare const ListOrganizationsFeaturesCommand_base: {
  new (
    input: ListOrganizationsFeaturesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListOrganizationsFeaturesCommandInput,
    ListOrganizationsFeaturesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListOrganizationsFeaturesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListOrganizationsFeaturesCommandInput,
    ListOrganizationsFeaturesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListOrganizationsFeaturesCommand extends ListOrganizationsFeaturesCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: ListOrganizationsFeaturesResponse;
    };
    sdk: {
      input: ListOrganizationsFeaturesCommandInput;
      output: ListOrganizationsFeaturesCommandOutput;
    };
  };
}
