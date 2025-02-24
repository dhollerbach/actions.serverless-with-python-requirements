import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetGeoLocationRequest,
  GetGeoLocationResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface GetGeoLocationCommandInput extends GetGeoLocationRequest {}
export interface GetGeoLocationCommandOutput
  extends GetGeoLocationResponse,
    __MetadataBearer {}
declare const GetGeoLocationCommand_base: {
  new (
    input: GetGeoLocationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetGeoLocationCommandInput,
    GetGeoLocationCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetGeoLocationCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetGeoLocationCommandInput,
    GetGeoLocationCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetGeoLocationCommand extends GetGeoLocationCommand_base {
  protected static __types: {
    api: {
      input: GetGeoLocationRequest;
      output: GetGeoLocationResponse;
    };
    sdk: {
      input: GetGeoLocationCommandInput;
      output: GetGeoLocationCommandOutput;
    };
  };
}
