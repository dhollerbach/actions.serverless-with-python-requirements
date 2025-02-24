import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListCidrCollectionsRequest,
  ListCidrCollectionsResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListCidrCollectionsCommandInput
  extends ListCidrCollectionsRequest {}
export interface ListCidrCollectionsCommandOutput
  extends ListCidrCollectionsResponse,
    __MetadataBearer {}
declare const ListCidrCollectionsCommand_base: {
  new (
    input: ListCidrCollectionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListCidrCollectionsCommandInput,
    ListCidrCollectionsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListCidrCollectionsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListCidrCollectionsCommandInput,
    ListCidrCollectionsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListCidrCollectionsCommand extends ListCidrCollectionsCommand_base {
  protected static __types: {
    api: {
      input: ListCidrCollectionsRequest;
      output: ListCidrCollectionsResponse;
    };
    sdk: {
      input: ListCidrCollectionsCommandInput;
      output: ListCidrCollectionsCommandOutput;
    };
  };
}
