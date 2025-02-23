import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessKeyResponseFilterSensitiveLog, } from "../models/models_0";
import { de_CreateAccessKeyCommand, se_CreateAccessKeyCommand } from "../protocols/Aws_query";
export { $Command };
export class CreateAccessKeyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "CreateAccessKey", {})
    .n("IAMClient", "CreateAccessKeyCommand")
    .f(void 0, CreateAccessKeyResponseFilterSensitiveLog)
    .ser(se_CreateAccessKeyCommand)
    .de(de_CreateAccessKeyCommand)
    .build() {
}
