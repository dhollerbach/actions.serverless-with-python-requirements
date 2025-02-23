import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import { ActivateKeySigningKeyCommandInput, ActivateKeySigningKeyCommandOutput } from "../commands/ActivateKeySigningKeyCommand";
import { AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput } from "../commands/AssociateVPCWithHostedZoneCommand";
import { ChangeCidrCollectionCommandInput, ChangeCidrCollectionCommandOutput } from "../commands/ChangeCidrCollectionCommand";
import { ChangeResourceRecordSetsCommandInput, ChangeResourceRecordSetsCommandOutput } from "../commands/ChangeResourceRecordSetsCommand";
import { ChangeTagsForResourceCommandInput, ChangeTagsForResourceCommandOutput } from "../commands/ChangeTagsForResourceCommand";
import { CreateCidrCollectionCommandInput, CreateCidrCollectionCommandOutput } from "../commands/CreateCidrCollectionCommand";
import { CreateHealthCheckCommandInput, CreateHealthCheckCommandOutput } from "../commands/CreateHealthCheckCommand";
import { CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput } from "../commands/CreateHostedZoneCommand";
import { CreateKeySigningKeyCommandInput, CreateKeySigningKeyCommandOutput } from "../commands/CreateKeySigningKeyCommand";
import { CreateQueryLoggingConfigCommandInput, CreateQueryLoggingConfigCommandOutput } from "../commands/CreateQueryLoggingConfigCommand";
import { CreateReusableDelegationSetCommandInput, CreateReusableDelegationSetCommandOutput } from "../commands/CreateReusableDelegationSetCommand";
import { CreateTrafficPolicyCommandInput, CreateTrafficPolicyCommandOutput } from "../commands/CreateTrafficPolicyCommand";
import { CreateTrafficPolicyInstanceCommandInput, CreateTrafficPolicyInstanceCommandOutput } from "../commands/CreateTrafficPolicyInstanceCommand";
import { CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput } from "../commands/CreateTrafficPolicyVersionCommand";
import { CreateVPCAssociationAuthorizationCommandInput, CreateVPCAssociationAuthorizationCommandOutput } from "../commands/CreateVPCAssociationAuthorizationCommand";
import { DeactivateKeySigningKeyCommandInput, DeactivateKeySigningKeyCommandOutput } from "../commands/DeactivateKeySigningKeyCommand";
import { DeleteCidrCollectionCommandInput, DeleteCidrCollectionCommandOutput } from "../commands/DeleteCidrCollectionCommand";
import { DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput } from "../commands/DeleteHealthCheckCommand";
import { DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput } from "../commands/DeleteHostedZoneCommand";
import { DeleteKeySigningKeyCommandInput, DeleteKeySigningKeyCommandOutput } from "../commands/DeleteKeySigningKeyCommand";
import { DeleteQueryLoggingConfigCommandInput, DeleteQueryLoggingConfigCommandOutput } from "../commands/DeleteQueryLoggingConfigCommand";
import { DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput } from "../commands/DeleteReusableDelegationSetCommand";
import { DeleteTrafficPolicyCommandInput, DeleteTrafficPolicyCommandOutput } from "../commands/DeleteTrafficPolicyCommand";
import { DeleteTrafficPolicyInstanceCommandInput, DeleteTrafficPolicyInstanceCommandOutput } from "../commands/DeleteTrafficPolicyInstanceCommand";
import { DeleteVPCAssociationAuthorizationCommandInput, DeleteVPCAssociationAuthorizationCommandOutput } from "../commands/DeleteVPCAssociationAuthorizationCommand";
import { DisableHostedZoneDNSSECCommandInput, DisableHostedZoneDNSSECCommandOutput } from "../commands/DisableHostedZoneDNSSECCommand";
import { DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput } from "../commands/DisassociateVPCFromHostedZoneCommand";
import { EnableHostedZoneDNSSECCommandInput, EnableHostedZoneDNSSECCommandOutput } from "../commands/EnableHostedZoneDNSSECCommand";
import { GetAccountLimitCommandInput, GetAccountLimitCommandOutput } from "../commands/GetAccountLimitCommand";
import { GetChangeCommandInput, GetChangeCommandOutput } from "../commands/GetChangeCommand";
import { GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput } from "../commands/GetCheckerIpRangesCommand";
import { GetDNSSECCommandInput, GetDNSSECCommandOutput } from "../commands/GetDNSSECCommand";
import { GetGeoLocationCommandInput, GetGeoLocationCommandOutput } from "../commands/GetGeoLocationCommand";
import { GetHealthCheckCommandInput, GetHealthCheckCommandOutput } from "../commands/GetHealthCheckCommand";
import { GetHealthCheckCountCommandInput, GetHealthCheckCountCommandOutput } from "../commands/GetHealthCheckCountCommand";
import { GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput } from "../commands/GetHealthCheckLastFailureReasonCommand";
import { GetHealthCheckStatusCommandInput, GetHealthCheckStatusCommandOutput } from "../commands/GetHealthCheckStatusCommand";
import { GetHostedZoneCommandInput, GetHostedZoneCommandOutput } from "../commands/GetHostedZoneCommand";
import { GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput } from "../commands/GetHostedZoneCountCommand";
import { GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput } from "../commands/GetHostedZoneLimitCommand";
import { GetQueryLoggingConfigCommandInput, GetQueryLoggingConfigCommandOutput } from "../commands/GetQueryLoggingConfigCommand";
import { GetReusableDelegationSetCommandInput, GetReusableDelegationSetCommandOutput } from "../commands/GetReusableDelegationSetCommand";
import { GetReusableDelegationSetLimitCommandInput, GetReusableDelegationSetLimitCommandOutput } from "../commands/GetReusableDelegationSetLimitCommand";
import { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "../commands/GetTrafficPolicyCommand";
import { GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput } from "../commands/GetTrafficPolicyInstanceCommand";
import { GetTrafficPolicyInstanceCountCommandInput, GetTrafficPolicyInstanceCountCommandOutput } from "../commands/GetTrafficPolicyInstanceCountCommand";
import { ListCidrBlocksCommandInput, ListCidrBlocksCommandOutput } from "../commands/ListCidrBlocksCommand";
import { ListCidrCollectionsCommandInput, ListCidrCollectionsCommandOutput } from "../commands/ListCidrCollectionsCommand";
import { ListCidrLocationsCommandInput, ListCidrLocationsCommandOutput } from "../commands/ListCidrLocationsCommand";
import { ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput } from "../commands/ListGeoLocationsCommand";
import { ListHealthChecksCommandInput, ListHealthChecksCommandOutput } from "../commands/ListHealthChecksCommand";
import { ListHostedZonesByNameCommandInput, ListHostedZonesByNameCommandOutput } from "../commands/ListHostedZonesByNameCommand";
import { ListHostedZonesByVPCCommandInput, ListHostedZonesByVPCCommandOutput } from "../commands/ListHostedZonesByVPCCommand";
import { ListHostedZonesCommandInput, ListHostedZonesCommandOutput } from "../commands/ListHostedZonesCommand";
import { ListQueryLoggingConfigsCommandInput, ListQueryLoggingConfigsCommandOutput } from "../commands/ListQueryLoggingConfigsCommand";
import { ListResourceRecordSetsCommandInput, ListResourceRecordSetsCommandOutput } from "../commands/ListResourceRecordSetsCommand";
import { ListReusableDelegationSetsCommandInput, ListReusableDelegationSetsCommandOutput } from "../commands/ListReusableDelegationSetsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { ListTagsForResourcesCommandInput, ListTagsForResourcesCommandOutput } from "../commands/ListTagsForResourcesCommand";
import { ListTrafficPoliciesCommandInput, ListTrafficPoliciesCommandOutput } from "../commands/ListTrafficPoliciesCommand";
import { ListTrafficPolicyInstancesByHostedZoneCommandInput, ListTrafficPolicyInstancesByHostedZoneCommandOutput } from "../commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import { ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput } from "../commands/ListTrafficPolicyInstancesByPolicyCommand";
import { ListTrafficPolicyInstancesCommandInput, ListTrafficPolicyInstancesCommandOutput } from "../commands/ListTrafficPolicyInstancesCommand";
import { ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput } from "../commands/ListTrafficPolicyVersionsCommand";
import { ListVPCAssociationAuthorizationsCommandInput, ListVPCAssociationAuthorizationsCommandOutput } from "../commands/ListVPCAssociationAuthorizationsCommand";
import { TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput } from "../commands/TestDNSAnswerCommand";
import { UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput } from "../commands/UpdateHealthCheckCommand";
import { UpdateHostedZoneCommentCommandInput, UpdateHostedZoneCommentCommandOutput } from "../commands/UpdateHostedZoneCommentCommand";
import { UpdateTrafficPolicyCommentCommandInput, UpdateTrafficPolicyCommentCommandOutput } from "../commands/UpdateTrafficPolicyCommentCommand";
import { UpdateTrafficPolicyInstanceCommandInput, UpdateTrafficPolicyInstanceCommandOutput } from "../commands/UpdateTrafficPolicyInstanceCommand";
/**
 * serializeAws_restXmlActivateKeySigningKeyCommand
 */
export declare const se_ActivateKeySigningKeyCommand: (input: ActivateKeySigningKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlAssociateVPCWithHostedZoneCommand
 */
export declare const se_AssociateVPCWithHostedZoneCommand: (input: AssociateVPCWithHostedZoneCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlChangeCidrCollectionCommand
 */
export declare const se_ChangeCidrCollectionCommand: (input: ChangeCidrCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlChangeResourceRecordSetsCommand
 */
export declare const se_ChangeResourceRecordSetsCommand: (input: ChangeResourceRecordSetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlChangeTagsForResourceCommand
 */
export declare const se_ChangeTagsForResourceCommand: (input: ChangeTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateCidrCollectionCommand
 */
export declare const se_CreateCidrCollectionCommand: (input: CreateCidrCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateHealthCheckCommand
 */
export declare const se_CreateHealthCheckCommand: (input: CreateHealthCheckCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateHostedZoneCommand
 */
export declare const se_CreateHostedZoneCommand: (input: CreateHostedZoneCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateKeySigningKeyCommand
 */
export declare const se_CreateKeySigningKeyCommand: (input: CreateKeySigningKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateQueryLoggingConfigCommand
 */
export declare const se_CreateQueryLoggingConfigCommand: (input: CreateQueryLoggingConfigCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateReusableDelegationSetCommand
 */
export declare const se_CreateReusableDelegationSetCommand: (input: CreateReusableDelegationSetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateTrafficPolicyCommand
 */
export declare const se_CreateTrafficPolicyCommand: (input: CreateTrafficPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateTrafficPolicyInstanceCommand
 */
export declare const se_CreateTrafficPolicyInstanceCommand: (input: CreateTrafficPolicyInstanceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateTrafficPolicyVersionCommand
 */
export declare const se_CreateTrafficPolicyVersionCommand: (input: CreateTrafficPolicyVersionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlCreateVPCAssociationAuthorizationCommand
 */
export declare const se_CreateVPCAssociationAuthorizationCommand: (input: CreateVPCAssociationAuthorizationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeactivateKeySigningKeyCommand
 */
export declare const se_DeactivateKeySigningKeyCommand: (input: DeactivateKeySigningKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteCidrCollectionCommand
 */
export declare const se_DeleteCidrCollectionCommand: (input: DeleteCidrCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteHealthCheckCommand
 */
export declare const se_DeleteHealthCheckCommand: (input: DeleteHealthCheckCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteHostedZoneCommand
 */
export declare const se_DeleteHostedZoneCommand: (input: DeleteHostedZoneCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteKeySigningKeyCommand
 */
export declare const se_DeleteKeySigningKeyCommand: (input: DeleteKeySigningKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteQueryLoggingConfigCommand
 */
export declare const se_DeleteQueryLoggingConfigCommand: (input: DeleteQueryLoggingConfigCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteReusableDelegationSetCommand
 */
export declare const se_DeleteReusableDelegationSetCommand: (input: DeleteReusableDelegationSetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteTrafficPolicyCommand
 */
export declare const se_DeleteTrafficPolicyCommand: (input: DeleteTrafficPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteTrafficPolicyInstanceCommand
 */
export declare const se_DeleteTrafficPolicyInstanceCommand: (input: DeleteTrafficPolicyInstanceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand
 */
export declare const se_DeleteVPCAssociationAuthorizationCommand: (input: DeleteVPCAssociationAuthorizationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDisableHostedZoneDNSSECCommand
 */
export declare const se_DisableHostedZoneDNSSECCommand: (input: DisableHostedZoneDNSSECCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlDisassociateVPCFromHostedZoneCommand
 */
export declare const se_DisassociateVPCFromHostedZoneCommand: (input: DisassociateVPCFromHostedZoneCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlEnableHostedZoneDNSSECCommand
 */
export declare const se_EnableHostedZoneDNSSECCommand: (input: EnableHostedZoneDNSSECCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetAccountLimitCommand
 */
export declare const se_GetAccountLimitCommand: (input: GetAccountLimitCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetChangeCommand
 */
export declare const se_GetChangeCommand: (input: GetChangeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetCheckerIpRangesCommand
 */
export declare const se_GetCheckerIpRangesCommand: (input: GetCheckerIpRangesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetDNSSECCommand
 */
export declare const se_GetDNSSECCommand: (input: GetDNSSECCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetGeoLocationCommand
 */
export declare const se_GetGeoLocationCommand: (input: GetGeoLocationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetHealthCheckCommand
 */
export declare const se_GetHealthCheckCommand: (input: GetHealthCheckCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetHealthCheckCountCommand
 */
export declare const se_GetHealthCheckCountCommand: (input: GetHealthCheckCountCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetHealthCheckLastFailureReasonCommand
 */
export declare const se_GetHealthCheckLastFailureReasonCommand: (input: GetHealthCheckLastFailureReasonCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetHealthCheckStatusCommand
 */
export declare const se_GetHealthCheckStatusCommand: (input: GetHealthCheckStatusCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetHostedZoneCommand
 */
export declare const se_GetHostedZoneCommand: (input: GetHostedZoneCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetHostedZoneCountCommand
 */
export declare const se_GetHostedZoneCountCommand: (input: GetHostedZoneCountCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetHostedZoneLimitCommand
 */
export declare const se_GetHostedZoneLimitCommand: (input: GetHostedZoneLimitCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetQueryLoggingConfigCommand
 */
export declare const se_GetQueryLoggingConfigCommand: (input: GetQueryLoggingConfigCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetReusableDelegationSetCommand
 */
export declare const se_GetReusableDelegationSetCommand: (input: GetReusableDelegationSetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetReusableDelegationSetLimitCommand
 */
export declare const se_GetReusableDelegationSetLimitCommand: (input: GetReusableDelegationSetLimitCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetTrafficPolicyCommand
 */
export declare const se_GetTrafficPolicyCommand: (input: GetTrafficPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetTrafficPolicyInstanceCommand
 */
export declare const se_GetTrafficPolicyInstanceCommand: (input: GetTrafficPolicyInstanceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlGetTrafficPolicyInstanceCountCommand
 */
export declare const se_GetTrafficPolicyInstanceCountCommand: (input: GetTrafficPolicyInstanceCountCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListCidrBlocksCommand
 */
export declare const se_ListCidrBlocksCommand: (input: ListCidrBlocksCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListCidrCollectionsCommand
 */
export declare const se_ListCidrCollectionsCommand: (input: ListCidrCollectionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListCidrLocationsCommand
 */
export declare const se_ListCidrLocationsCommand: (input: ListCidrLocationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListGeoLocationsCommand
 */
export declare const se_ListGeoLocationsCommand: (input: ListGeoLocationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListHealthChecksCommand
 */
export declare const se_ListHealthChecksCommand: (input: ListHealthChecksCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListHostedZonesCommand
 */
export declare const se_ListHostedZonesCommand: (input: ListHostedZonesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListHostedZonesByNameCommand
 */
export declare const se_ListHostedZonesByNameCommand: (input: ListHostedZonesByNameCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListHostedZonesByVPCCommand
 */
export declare const se_ListHostedZonesByVPCCommand: (input: ListHostedZonesByVPCCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListQueryLoggingConfigsCommand
 */
export declare const se_ListQueryLoggingConfigsCommand: (input: ListQueryLoggingConfigsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListResourceRecordSetsCommand
 */
export declare const se_ListResourceRecordSetsCommand: (input: ListResourceRecordSetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListReusableDelegationSetsCommand
 */
export declare const se_ListReusableDelegationSetsCommand: (input: ListReusableDelegationSetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListTagsForResourceCommand
 */
export declare const se_ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListTagsForResourcesCommand
 */
export declare const se_ListTagsForResourcesCommand: (input: ListTagsForResourcesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListTrafficPoliciesCommand
 */
export declare const se_ListTrafficPoliciesCommand: (input: ListTrafficPoliciesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListTrafficPolicyInstancesCommand
 */
export declare const se_ListTrafficPolicyInstancesCommand: (input: ListTrafficPolicyInstancesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand
 */
export declare const se_ListTrafficPolicyInstancesByHostedZoneCommand: (input: ListTrafficPolicyInstancesByHostedZoneCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand
 */
export declare const se_ListTrafficPolicyInstancesByPolicyCommand: (input: ListTrafficPolicyInstancesByPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListTrafficPolicyVersionsCommand
 */
export declare const se_ListTrafficPolicyVersionsCommand: (input: ListTrafficPolicyVersionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlListVPCAssociationAuthorizationsCommand
 */
export declare const se_ListVPCAssociationAuthorizationsCommand: (input: ListVPCAssociationAuthorizationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlTestDNSAnswerCommand
 */
export declare const se_TestDNSAnswerCommand: (input: TestDNSAnswerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlUpdateHealthCheckCommand
 */
export declare const se_UpdateHealthCheckCommand: (input: UpdateHealthCheckCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlUpdateHostedZoneCommentCommand
 */
export declare const se_UpdateHostedZoneCommentCommand: (input: UpdateHostedZoneCommentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlUpdateTrafficPolicyCommentCommand
 */
export declare const se_UpdateTrafficPolicyCommentCommand: (input: UpdateTrafficPolicyCommentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restXmlUpdateTrafficPolicyInstanceCommand
 */
export declare const se_UpdateTrafficPolicyInstanceCommand: (input: UpdateTrafficPolicyInstanceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_restXmlActivateKeySigningKeyCommand
 */
export declare const de_ActivateKeySigningKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ActivateKeySigningKeyCommandOutput>;
/**
 * deserializeAws_restXmlAssociateVPCWithHostedZoneCommand
 */
export declare const de_AssociateVPCWithHostedZoneCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateVPCWithHostedZoneCommandOutput>;
/**
 * deserializeAws_restXmlChangeCidrCollectionCommand
 */
export declare const de_ChangeCidrCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ChangeCidrCollectionCommandOutput>;
/**
 * deserializeAws_restXmlChangeResourceRecordSetsCommand
 */
export declare const de_ChangeResourceRecordSetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ChangeResourceRecordSetsCommandOutput>;
/**
 * deserializeAws_restXmlChangeTagsForResourceCommand
 */
export declare const de_ChangeTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ChangeTagsForResourceCommandOutput>;
/**
 * deserializeAws_restXmlCreateCidrCollectionCommand
 */
export declare const de_CreateCidrCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateCidrCollectionCommandOutput>;
/**
 * deserializeAws_restXmlCreateHealthCheckCommand
 */
export declare const de_CreateHealthCheckCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateHealthCheckCommandOutput>;
/**
 * deserializeAws_restXmlCreateHostedZoneCommand
 */
export declare const de_CreateHostedZoneCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateHostedZoneCommandOutput>;
/**
 * deserializeAws_restXmlCreateKeySigningKeyCommand
 */
export declare const de_CreateKeySigningKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateKeySigningKeyCommandOutput>;
/**
 * deserializeAws_restXmlCreateQueryLoggingConfigCommand
 */
export declare const de_CreateQueryLoggingConfigCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateQueryLoggingConfigCommandOutput>;
/**
 * deserializeAws_restXmlCreateReusableDelegationSetCommand
 */
export declare const de_CreateReusableDelegationSetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateReusableDelegationSetCommandOutput>;
/**
 * deserializeAws_restXmlCreateTrafficPolicyCommand
 */
export declare const de_CreateTrafficPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTrafficPolicyCommandOutput>;
/**
 * deserializeAws_restXmlCreateTrafficPolicyInstanceCommand
 */
export declare const de_CreateTrafficPolicyInstanceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTrafficPolicyInstanceCommandOutput>;
/**
 * deserializeAws_restXmlCreateTrafficPolicyVersionCommand
 */
export declare const de_CreateTrafficPolicyVersionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTrafficPolicyVersionCommandOutput>;
/**
 * deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand
 */
export declare const de_CreateVPCAssociationAuthorizationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateVPCAssociationAuthorizationCommandOutput>;
/**
 * deserializeAws_restXmlDeactivateKeySigningKeyCommand
 */
export declare const de_DeactivateKeySigningKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeactivateKeySigningKeyCommandOutput>;
/**
 * deserializeAws_restXmlDeleteCidrCollectionCommand
 */
export declare const de_DeleteCidrCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteCidrCollectionCommandOutput>;
/**
 * deserializeAws_restXmlDeleteHealthCheckCommand
 */
export declare const de_DeleteHealthCheckCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteHealthCheckCommandOutput>;
/**
 * deserializeAws_restXmlDeleteHostedZoneCommand
 */
export declare const de_DeleteHostedZoneCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteHostedZoneCommandOutput>;
/**
 * deserializeAws_restXmlDeleteKeySigningKeyCommand
 */
export declare const de_DeleteKeySigningKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteKeySigningKeyCommandOutput>;
/**
 * deserializeAws_restXmlDeleteQueryLoggingConfigCommand
 */
export declare const de_DeleteQueryLoggingConfigCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteQueryLoggingConfigCommandOutput>;
/**
 * deserializeAws_restXmlDeleteReusableDelegationSetCommand
 */
export declare const de_DeleteReusableDelegationSetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteReusableDelegationSetCommandOutput>;
/**
 * deserializeAws_restXmlDeleteTrafficPolicyCommand
 */
export declare const de_DeleteTrafficPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteTrafficPolicyCommandOutput>;
/**
 * deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand
 */
export declare const de_DeleteTrafficPolicyInstanceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteTrafficPolicyInstanceCommandOutput>;
/**
 * deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand
 */
export declare const de_DeleteVPCAssociationAuthorizationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteVPCAssociationAuthorizationCommandOutput>;
/**
 * deserializeAws_restXmlDisableHostedZoneDNSSECCommand
 */
export declare const de_DisableHostedZoneDNSSECCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisableHostedZoneDNSSECCommandOutput>;
/**
 * deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand
 */
export declare const de_DisassociateVPCFromHostedZoneCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateVPCFromHostedZoneCommandOutput>;
/**
 * deserializeAws_restXmlEnableHostedZoneDNSSECCommand
 */
export declare const de_EnableHostedZoneDNSSECCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<EnableHostedZoneDNSSECCommandOutput>;
/**
 * deserializeAws_restXmlGetAccountLimitCommand
 */
export declare const de_GetAccountLimitCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetAccountLimitCommandOutput>;
/**
 * deserializeAws_restXmlGetChangeCommand
 */
export declare const de_GetChangeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetChangeCommandOutput>;
/**
 * deserializeAws_restXmlGetCheckerIpRangesCommand
 */
export declare const de_GetCheckerIpRangesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetCheckerIpRangesCommandOutput>;
/**
 * deserializeAws_restXmlGetDNSSECCommand
 */
export declare const de_GetDNSSECCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDNSSECCommandOutput>;
/**
 * deserializeAws_restXmlGetGeoLocationCommand
 */
export declare const de_GetGeoLocationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetGeoLocationCommandOutput>;
/**
 * deserializeAws_restXmlGetHealthCheckCommand
 */
export declare const de_GetHealthCheckCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetHealthCheckCommandOutput>;
/**
 * deserializeAws_restXmlGetHealthCheckCountCommand
 */
export declare const de_GetHealthCheckCountCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetHealthCheckCountCommandOutput>;
/**
 * deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand
 */
export declare const de_GetHealthCheckLastFailureReasonCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetHealthCheckLastFailureReasonCommandOutput>;
/**
 * deserializeAws_restXmlGetHealthCheckStatusCommand
 */
export declare const de_GetHealthCheckStatusCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetHealthCheckStatusCommandOutput>;
/**
 * deserializeAws_restXmlGetHostedZoneCommand
 */
export declare const de_GetHostedZoneCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetHostedZoneCommandOutput>;
/**
 * deserializeAws_restXmlGetHostedZoneCountCommand
 */
export declare const de_GetHostedZoneCountCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetHostedZoneCountCommandOutput>;
/**
 * deserializeAws_restXmlGetHostedZoneLimitCommand
 */
export declare const de_GetHostedZoneLimitCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetHostedZoneLimitCommandOutput>;
/**
 * deserializeAws_restXmlGetQueryLoggingConfigCommand
 */
export declare const de_GetQueryLoggingConfigCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetQueryLoggingConfigCommandOutput>;
/**
 * deserializeAws_restXmlGetReusableDelegationSetCommand
 */
export declare const de_GetReusableDelegationSetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetReusableDelegationSetCommandOutput>;
/**
 * deserializeAws_restXmlGetReusableDelegationSetLimitCommand
 */
export declare const de_GetReusableDelegationSetLimitCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetReusableDelegationSetLimitCommandOutput>;
/**
 * deserializeAws_restXmlGetTrafficPolicyCommand
 */
export declare const de_GetTrafficPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetTrafficPolicyCommandOutput>;
/**
 * deserializeAws_restXmlGetTrafficPolicyInstanceCommand
 */
export declare const de_GetTrafficPolicyInstanceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetTrafficPolicyInstanceCommandOutput>;
/**
 * deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand
 */
export declare const de_GetTrafficPolicyInstanceCountCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetTrafficPolicyInstanceCountCommandOutput>;
/**
 * deserializeAws_restXmlListCidrBlocksCommand
 */
export declare const de_ListCidrBlocksCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListCidrBlocksCommandOutput>;
/**
 * deserializeAws_restXmlListCidrCollectionsCommand
 */
export declare const de_ListCidrCollectionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListCidrCollectionsCommandOutput>;
/**
 * deserializeAws_restXmlListCidrLocationsCommand
 */
export declare const de_ListCidrLocationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListCidrLocationsCommandOutput>;
/**
 * deserializeAws_restXmlListGeoLocationsCommand
 */
export declare const de_ListGeoLocationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListGeoLocationsCommandOutput>;
/**
 * deserializeAws_restXmlListHealthChecksCommand
 */
export declare const de_ListHealthChecksCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListHealthChecksCommandOutput>;
/**
 * deserializeAws_restXmlListHostedZonesCommand
 */
export declare const de_ListHostedZonesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListHostedZonesCommandOutput>;
/**
 * deserializeAws_restXmlListHostedZonesByNameCommand
 */
export declare const de_ListHostedZonesByNameCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListHostedZonesByNameCommandOutput>;
/**
 * deserializeAws_restXmlListHostedZonesByVPCCommand
 */
export declare const de_ListHostedZonesByVPCCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListHostedZonesByVPCCommandOutput>;
/**
 * deserializeAws_restXmlListQueryLoggingConfigsCommand
 */
export declare const de_ListQueryLoggingConfigsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListQueryLoggingConfigsCommandOutput>;
/**
 * deserializeAws_restXmlListResourceRecordSetsCommand
 */
export declare const de_ListResourceRecordSetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListResourceRecordSetsCommandOutput>;
/**
 * deserializeAws_restXmlListReusableDelegationSetsCommand
 */
export declare const de_ListReusableDelegationSetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListReusableDelegationSetsCommandOutput>;
/**
 * deserializeAws_restXmlListTagsForResourceCommand
 */
export declare const de_ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
/**
 * deserializeAws_restXmlListTagsForResourcesCommand
 */
export declare const de_ListTagsForResourcesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourcesCommandOutput>;
/**
 * deserializeAws_restXmlListTrafficPoliciesCommand
 */
export declare const de_ListTrafficPoliciesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTrafficPoliciesCommandOutput>;
/**
 * deserializeAws_restXmlListTrafficPolicyInstancesCommand
 */
export declare const de_ListTrafficPolicyInstancesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTrafficPolicyInstancesCommandOutput>;
/**
 * deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand
 */
export declare const de_ListTrafficPolicyInstancesByHostedZoneCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput>;
/**
 * deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand
 */
export declare const de_ListTrafficPolicyInstancesByPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTrafficPolicyInstancesByPolicyCommandOutput>;
/**
 * deserializeAws_restXmlListTrafficPolicyVersionsCommand
 */
export declare const de_ListTrafficPolicyVersionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTrafficPolicyVersionsCommandOutput>;
/**
 * deserializeAws_restXmlListVPCAssociationAuthorizationsCommand
 */
export declare const de_ListVPCAssociationAuthorizationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListVPCAssociationAuthorizationsCommandOutput>;
/**
 * deserializeAws_restXmlTestDNSAnswerCommand
 */
export declare const de_TestDNSAnswerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TestDNSAnswerCommandOutput>;
/**
 * deserializeAws_restXmlUpdateHealthCheckCommand
 */
export declare const de_UpdateHealthCheckCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateHealthCheckCommandOutput>;
/**
 * deserializeAws_restXmlUpdateHostedZoneCommentCommand
 */
export declare const de_UpdateHostedZoneCommentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateHostedZoneCommentCommandOutput>;
/**
 * deserializeAws_restXmlUpdateTrafficPolicyCommentCommand
 */
export declare const de_UpdateTrafficPolicyCommentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateTrafficPolicyCommentCommandOutput>;
/**
 * deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand
 */
export declare const de_UpdateTrafficPolicyInstanceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateTrafficPolicyInstanceCommandOutput>;
