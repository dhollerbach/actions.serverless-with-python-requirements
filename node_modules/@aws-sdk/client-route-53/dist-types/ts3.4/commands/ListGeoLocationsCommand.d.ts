import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListGeoLocationsRequest,
  ListGeoLocationsResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListGeoLocationsCommandInput extends ListGeoLocationsRequest {}
export interface ListGeoLocationsCommandOutput
  extends ListGeoLocationsResponse,
    __MetadataBearer {}
declare const ListGeoLocationsCommand_base: {
  new (
    input: ListGeoLocationsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListGeoLocationsCommandInput,
    ListGeoLocationsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListGeoLocationsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListGeoLocationsCommandInput,
    ListGeoLocationsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListGeoLocationsCommand extends ListGeoLocationsCommand_base {
  protected static __types: {
    api: {
      input: ListGeoLocationsRequest;
      output: ListGeoLocationsResponse;
    };
    sdk: {
      input: ListGeoLocationsCommandInput;
      output: ListGeoLocationsCommandOutput;
    };
  };
}
