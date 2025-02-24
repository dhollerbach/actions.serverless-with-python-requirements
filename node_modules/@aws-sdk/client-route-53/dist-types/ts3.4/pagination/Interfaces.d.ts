import { PaginationConfiguration } from "@smithy/types";
import { Route53Client } from "../Route53Client";
export interface Route53PaginationConfiguration
  extends PaginationConfiguration {
  client: Route53Client;
}
