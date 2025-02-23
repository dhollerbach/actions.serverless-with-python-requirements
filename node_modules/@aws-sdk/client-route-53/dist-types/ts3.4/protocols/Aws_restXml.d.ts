import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import {
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "../commands/ActivateKeySigningKeyCommand";
import {
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "../commands/AssociateVPCWithHostedZoneCommand";
import {
  ChangeCidrCollectionCommandInput,
  ChangeCidrCollectionCommandOutput,
} from "../commands/ChangeCidrCollectionCommand";
import {
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "../commands/ChangeResourceRecordSetsCommand";
import {
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "../commands/ChangeTagsForResourceCommand";
import {
  CreateCidrCollectionCommandInput,
  CreateCidrCollectionCommandOutput,
} from "../commands/CreateCidrCollectionCommand";
import {
  CreateHealthCheckCommandInput,
  CreateHealthCheckCommandOutput,
} from "../commands/CreateHealthCheckCommand";
import {
  CreateHostedZoneCommandInput,
  CreateHostedZoneCommandOutput,
} from "../commands/CreateHostedZoneCommand";
import {
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
} from "../commands/CreateKeySigningKeyCommand";
import {
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "../commands/CreateQueryLoggingConfigCommand";
import {
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "../commands/CreateReusableDelegationSetCommand";
import {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "../commands/CreateTrafficPolicyCommand";
import {
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "../commands/CreateTrafficPolicyInstanceCommand";
import {
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "../commands/CreateTrafficPolicyVersionCommand";
import {
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "../commands/CreateVPCAssociationAuthorizationCommand";
import {
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
} from "../commands/DeactivateKeySigningKeyCommand";
import {
  DeleteCidrCollectionCommandInput,
  DeleteCidrCollectionCommandOutput,
} from "../commands/DeleteCidrCollectionCommand";
import {
  DeleteHealthCheckCommandInput,
  DeleteHealthCheckCommandOutput,
} from "../commands/DeleteHealthCheckCommand";
import {
  DeleteHostedZoneCommandInput,
  DeleteHostedZoneCommandOutput,
} from "../commands/DeleteHostedZoneCommand";
import {
  DeleteKeySigningKeyCommandInput,
  DeleteKeySigningKeyCommandOutput,
} from "../commands/DeleteKeySigningKeyCommand";
import {
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "../commands/DeleteQueryLoggingConfigCommand";
import {
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "../commands/DeleteReusableDelegationSetCommand";
import {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "../commands/DeleteTrafficPolicyCommand";
import {
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "../commands/DeleteTrafficPolicyInstanceCommand";
import {
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "../commands/DeleteVPCAssociationAuthorizationCommand";
import {
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
} from "../commands/DisableHostedZoneDNSSECCommand";
import {
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "../commands/DisassociateVPCFromHostedZoneCommand";
import {
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
} from "../commands/EnableHostedZoneDNSSECCommand";
import {
  GetAccountLimitCommandInput,
  GetAccountLimitCommandOutput,
} from "../commands/GetAccountLimitCommand";
import {
  GetChangeCommandInput,
  GetChangeCommandOutput,
} from "../commands/GetChangeCommand";
import {
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
} from "../commands/GetCheckerIpRangesCommand";
import {
  GetDNSSECCommandInput,
  GetDNSSECCommandOutput,
} from "../commands/GetDNSSECCommand";
import {
  GetGeoLocationCommandInput,
  GetGeoLocationCommandOutput,
} from "../commands/GetGeoLocationCommand";
import {
  GetHealthCheckCommandInput,
  GetHealthCheckCommandOutput,
} from "../commands/GetHealthCheckCommand";
import {
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "../commands/GetHealthCheckCountCommand";
import {
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "../commands/GetHealthCheckLastFailureReasonCommand";
import {
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "../commands/GetHealthCheckStatusCommand";
import {
  GetHostedZoneCommandInput,
  GetHostedZoneCommandOutput,
} from "../commands/GetHostedZoneCommand";
import {
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
} from "../commands/GetHostedZoneCountCommand";
import {
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
} from "../commands/GetHostedZoneLimitCommand";
import {
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "../commands/GetQueryLoggingConfigCommand";
import {
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "../commands/GetReusableDelegationSetCommand";
import {
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "../commands/GetReusableDelegationSetLimitCommand";
import {
  GetTrafficPolicyCommandInput,
  GetTrafficPolicyCommandOutput,
} from "../commands/GetTrafficPolicyCommand";
import {
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "../commands/GetTrafficPolicyInstanceCommand";
import {
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "../commands/GetTrafficPolicyInstanceCountCommand";
import {
  ListCidrBlocksCommandInput,
  ListCidrBlocksCommandOutput,
} from "../commands/ListCidrBlocksCommand";
import {
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "../commands/ListCidrCollectionsCommand";
import {
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput,
} from "../commands/ListCidrLocationsCommand";
import {
  ListGeoLocationsCommandInput,
  ListGeoLocationsCommandOutput,
} from "../commands/ListGeoLocationsCommand";
import {
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
} from "../commands/ListHealthChecksCommand";
import {
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "../commands/ListHostedZonesByNameCommand";
import {
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "../commands/ListHostedZonesByVPCCommand";
import {
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
} from "../commands/ListHostedZonesCommand";
import {
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "../commands/ListQueryLoggingConfigsCommand";
import {
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "../commands/ListResourceRecordSetsCommand";
import {
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "../commands/ListReusableDelegationSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "../commands/ListTagsForResourcesCommand";
import {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "../commands/ListTrafficPoliciesCommand";
import {
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "../commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import {
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "../commands/ListTrafficPolicyInstancesByPolicyCommand";
import {
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "../commands/ListTrafficPolicyInstancesCommand";
import {
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "../commands/ListTrafficPolicyVersionsCommand";
import {
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "../commands/ListVPCAssociationAuthorizationsCommand";
import {
  TestDNSAnswerCommandInput,
  TestDNSAnswerCommandOutput,
} from "../commands/TestDNSAnswerCommand";
import {
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
} from "../commands/UpdateHealthCheckCommand";
import {
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "../commands/UpdateHostedZoneCommentCommand";
import {
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "../commands/UpdateTrafficPolicyCommentCommand";
import {
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "../commands/UpdateTrafficPolicyInstanceCommand";
export declare const se_ActivateKeySigningKeyCommand: (
  input: ActivateKeySigningKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AssociateVPCWithHostedZoneCommand: (
  input: AssociateVPCWithHostedZoneCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ChangeCidrCollectionCommand: (
  input: ChangeCidrCollectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ChangeResourceRecordSetsCommand: (
  input: ChangeResourceRecordSetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ChangeTagsForResourceCommand: (
  input: ChangeTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateCidrCollectionCommand: (
  input: CreateCidrCollectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateHealthCheckCommand: (
  input: CreateHealthCheckCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateHostedZoneCommand: (
  input: CreateHostedZoneCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateKeySigningKeyCommand: (
  input: CreateKeySigningKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateQueryLoggingConfigCommand: (
  input: CreateQueryLoggingConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateReusableDelegationSetCommand: (
  input: CreateReusableDelegationSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateTrafficPolicyCommand: (
  input: CreateTrafficPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateTrafficPolicyInstanceCommand: (
  input: CreateTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateTrafficPolicyVersionCommand: (
  input: CreateTrafficPolicyVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateVPCAssociationAuthorizationCommand: (
  input: CreateVPCAssociationAuthorizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeactivateKeySigningKeyCommand: (
  input: DeactivateKeySigningKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteCidrCollectionCommand: (
  input: DeleteCidrCollectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteHealthCheckCommand: (
  input: DeleteHealthCheckCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteHostedZoneCommand: (
  input: DeleteHostedZoneCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteKeySigningKeyCommand: (
  input: DeleteKeySigningKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteQueryLoggingConfigCommand: (
  input: DeleteQueryLoggingConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteReusableDelegationSetCommand: (
  input: DeleteReusableDelegationSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteTrafficPolicyCommand: (
  input: DeleteTrafficPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteTrafficPolicyInstanceCommand: (
  input: DeleteTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteVPCAssociationAuthorizationCommand: (
  input: DeleteVPCAssociationAuthorizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DisableHostedZoneDNSSECCommand: (
  input: DisableHostedZoneDNSSECCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DisassociateVPCFromHostedZoneCommand: (
  input: DisassociateVPCFromHostedZoneCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_EnableHostedZoneDNSSECCommand: (
  input: EnableHostedZoneDNSSECCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetAccountLimitCommand: (
  input: GetAccountLimitCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetChangeCommand: (
  input: GetChangeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetCheckerIpRangesCommand: (
  input: GetCheckerIpRangesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetDNSSECCommand: (
  input: GetDNSSECCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetGeoLocationCommand: (
  input: GetGeoLocationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetHealthCheckCommand: (
  input: GetHealthCheckCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetHealthCheckCountCommand: (
  input: GetHealthCheckCountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetHealthCheckLastFailureReasonCommand: (
  input: GetHealthCheckLastFailureReasonCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetHealthCheckStatusCommand: (
  input: GetHealthCheckStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetHostedZoneCommand: (
  input: GetHostedZoneCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetHostedZoneCountCommand: (
  input: GetHostedZoneCountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetHostedZoneLimitCommand: (
  input: GetHostedZoneLimitCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetQueryLoggingConfigCommand: (
  input: GetQueryLoggingConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetReusableDelegationSetCommand: (
  input: GetReusableDelegationSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetReusableDelegationSetLimitCommand: (
  input: GetReusableDelegationSetLimitCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetTrafficPolicyCommand: (
  input: GetTrafficPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetTrafficPolicyInstanceCommand: (
  input: GetTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetTrafficPolicyInstanceCountCommand: (
  input: GetTrafficPolicyInstanceCountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListCidrBlocksCommand: (
  input: ListCidrBlocksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListCidrCollectionsCommand: (
  input: ListCidrCollectionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListCidrLocationsCommand: (
  input: ListCidrLocationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListGeoLocationsCommand: (
  input: ListGeoLocationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListHealthChecksCommand: (
  input: ListHealthChecksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListHostedZonesCommand: (
  input: ListHostedZonesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListHostedZonesByNameCommand: (
  input: ListHostedZonesByNameCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListHostedZonesByVPCCommand: (
  input: ListHostedZonesByVPCCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListQueryLoggingConfigsCommand: (
  input: ListQueryLoggingConfigsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListResourceRecordSetsCommand: (
  input: ListResourceRecordSetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListReusableDelegationSetsCommand: (
  input: ListReusableDelegationSetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTagsForResourcesCommand: (
  input: ListTagsForResourcesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTrafficPoliciesCommand: (
  input: ListTrafficPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTrafficPolicyInstancesCommand: (
  input: ListTrafficPolicyInstancesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTrafficPolicyInstancesByHostedZoneCommand: (
  input: ListTrafficPolicyInstancesByHostedZoneCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTrafficPolicyInstancesByPolicyCommand: (
  input: ListTrafficPolicyInstancesByPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTrafficPolicyVersionsCommand: (
  input: ListTrafficPolicyVersionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListVPCAssociationAuthorizationsCommand: (
  input: ListVPCAssociationAuthorizationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TestDNSAnswerCommand: (
  input: TestDNSAnswerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateHealthCheckCommand: (
  input: UpdateHealthCheckCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateHostedZoneCommentCommand: (
  input: UpdateHostedZoneCommentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateTrafficPolicyCommentCommand: (
  input: UpdateTrafficPolicyCommentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateTrafficPolicyInstanceCommand: (
  input: UpdateTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_ActivateKeySigningKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ActivateKeySigningKeyCommandOutput>;
export declare const de_AssociateVPCWithHostedZoneCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateVPCWithHostedZoneCommandOutput>;
export declare const de_ChangeCidrCollectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ChangeCidrCollectionCommandOutput>;
export declare const de_ChangeResourceRecordSetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ChangeResourceRecordSetsCommandOutput>;
export declare const de_ChangeTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ChangeTagsForResourceCommandOutput>;
export declare const de_CreateCidrCollectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateCidrCollectionCommandOutput>;
export declare const de_CreateHealthCheckCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateHealthCheckCommandOutput>;
export declare const de_CreateHostedZoneCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateHostedZoneCommandOutput>;
export declare const de_CreateKeySigningKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateKeySigningKeyCommandOutput>;
export declare const de_CreateQueryLoggingConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateQueryLoggingConfigCommandOutput>;
export declare const de_CreateReusableDelegationSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateReusableDelegationSetCommandOutput>;
export declare const de_CreateTrafficPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTrafficPolicyCommandOutput>;
export declare const de_CreateTrafficPolicyInstanceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTrafficPolicyInstanceCommandOutput>;
export declare const de_CreateTrafficPolicyVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTrafficPolicyVersionCommandOutput>;
export declare const de_CreateVPCAssociationAuthorizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateVPCAssociationAuthorizationCommandOutput>;
export declare const de_DeactivateKeySigningKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeactivateKeySigningKeyCommandOutput>;
export declare const de_DeleteCidrCollectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteCidrCollectionCommandOutput>;
export declare const de_DeleteHealthCheckCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteHealthCheckCommandOutput>;
export declare const de_DeleteHostedZoneCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteHostedZoneCommandOutput>;
export declare const de_DeleteKeySigningKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteKeySigningKeyCommandOutput>;
export declare const de_DeleteQueryLoggingConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteQueryLoggingConfigCommandOutput>;
export declare const de_DeleteReusableDelegationSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteReusableDelegationSetCommandOutput>;
export declare const de_DeleteTrafficPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteTrafficPolicyCommandOutput>;
export declare const de_DeleteTrafficPolicyInstanceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteTrafficPolicyInstanceCommandOutput>;
export declare const de_DeleteVPCAssociationAuthorizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteVPCAssociationAuthorizationCommandOutput>;
export declare const de_DisableHostedZoneDNSSECCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisableHostedZoneDNSSECCommandOutput>;
export declare const de_DisassociateVPCFromHostedZoneCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateVPCFromHostedZoneCommandOutput>;
export declare const de_EnableHostedZoneDNSSECCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EnableHostedZoneDNSSECCommandOutput>;
export declare const de_GetAccountLimitCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccountLimitCommandOutput>;
export declare const de_GetChangeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetChangeCommandOutput>;
export declare const de_GetCheckerIpRangesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCheckerIpRangesCommandOutput>;
export declare const de_GetDNSSECCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDNSSECCommandOutput>;
export declare const de_GetGeoLocationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGeoLocationCommandOutput>;
export declare const de_GetHealthCheckCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHealthCheckCommandOutput>;
export declare const de_GetHealthCheckCountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHealthCheckCountCommandOutput>;
export declare const de_GetHealthCheckLastFailureReasonCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHealthCheckLastFailureReasonCommandOutput>;
export declare const de_GetHealthCheckStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHealthCheckStatusCommandOutput>;
export declare const de_GetHostedZoneCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHostedZoneCommandOutput>;
export declare const de_GetHostedZoneCountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHostedZoneCountCommandOutput>;
export declare const de_GetHostedZoneLimitCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHostedZoneLimitCommandOutput>;
export declare const de_GetQueryLoggingConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetQueryLoggingConfigCommandOutput>;
export declare const de_GetReusableDelegationSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetReusableDelegationSetCommandOutput>;
export declare const de_GetReusableDelegationSetLimitCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetReusableDelegationSetLimitCommandOutput>;
export declare const de_GetTrafficPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTrafficPolicyCommandOutput>;
export declare const de_GetTrafficPolicyInstanceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTrafficPolicyInstanceCommandOutput>;
export declare const de_GetTrafficPolicyInstanceCountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTrafficPolicyInstanceCountCommandOutput>;
export declare const de_ListCidrBlocksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListCidrBlocksCommandOutput>;
export declare const de_ListCidrCollectionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListCidrCollectionsCommandOutput>;
export declare const de_ListCidrLocationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListCidrLocationsCommandOutput>;
export declare const de_ListGeoLocationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGeoLocationsCommandOutput>;
export declare const de_ListHealthChecksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListHealthChecksCommandOutput>;
export declare const de_ListHostedZonesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListHostedZonesCommandOutput>;
export declare const de_ListHostedZonesByNameCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListHostedZonesByNameCommandOutput>;
export declare const de_ListHostedZonesByVPCCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListHostedZonesByVPCCommandOutput>;
export declare const de_ListQueryLoggingConfigsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListQueryLoggingConfigsCommandOutput>;
export declare const de_ListResourceRecordSetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListResourceRecordSetsCommandOutput>;
export declare const de_ListReusableDelegationSetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListReusableDelegationSetsCommandOutput>;
export declare const de_ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const de_ListTagsForResourcesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourcesCommandOutput>;
export declare const de_ListTrafficPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTrafficPoliciesCommandOutput>;
export declare const de_ListTrafficPolicyInstancesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTrafficPolicyInstancesCommandOutput>;
export declare const de_ListTrafficPolicyInstancesByHostedZoneCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput>;
export declare const de_ListTrafficPolicyInstancesByPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTrafficPolicyInstancesByPolicyCommandOutput>;
export declare const de_ListTrafficPolicyVersionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTrafficPolicyVersionsCommandOutput>;
export declare const de_ListVPCAssociationAuthorizationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListVPCAssociationAuthorizationsCommandOutput>;
export declare const de_TestDNSAnswerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TestDNSAnswerCommandOutput>;
export declare const de_UpdateHealthCheckCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateHealthCheckCommandOutput>;
export declare const de_UpdateHostedZoneCommentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateHostedZoneCommentCommandOutput>;
export declare const de_UpdateTrafficPolicyCommentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateTrafficPolicyCommentCommandOutput>;
export declare const de_UpdateTrafficPolicyInstanceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateTrafficPolicyInstanceCommandOutput>;
