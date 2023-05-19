import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sendgrid.send({
      to: req.body.email,
      from: "registro.dmh.equipo9@gmail.com",
      subject: "Restablecimiento de contraseña",
      html: `<body>
      <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
            <tr>
              <td valign="top" bgcolor="#FFFFFF" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p></p>
      </td>
    </tr>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c965d27e-ba11-45f1-9c36-39a11f03a42f">
    <tbody>
      <tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="3A393E">
        </td>
      </tr>
    </tbody>
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d26939d1-7cbf-48fe-be04-e382fdf110e4">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"><img class="max-width" border="0" style="display:block; background-color:#3A393E; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src={logo} alt="logo"></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="18e8728f-3eda-47d2-92b8-d4183b934f73.1">
    <tbody>
      <tr>
        <td style="padding:30px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="#3A393E">
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
            <tbody>
              <tr>
                <td style="padding:0px 0px 10px 0px;" bgcolor="#c1fd35"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="502e2fdd-425a-44fa-8b79-dfdd1e2aec60">
    <tbody>
      <tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#201f22">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="381b61d3-c904-46bf-9ddf-d54bd2bc73fb" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:18px 0px 18px 0px; line-height:40px; text-align:inherit; background-color:#201f22;" height="100%" valign="top" bgcolor="#201f22" role="module-content"><div><h1 style="text-align: center"><span style="color: #c1fd35">Hola</span></h1><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8450b81a-ecbd-4ae1-87a8-c5aafd7215e5" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:18px 0px 18px 0px; line-height:20px; text-align:inherit; background-color:#201f22;" height="100%" valign="top" bgcolor="#201f22" role="module-content"><div><h4 style="text-align: center"><span style="white-space: pre-wrap; color: #ffffff; font-size: 18px">Recibimos tu solicitud de reseteo de contraseña</span><span style="color: #ffffff; font-size: 18px"><br>
  </span><span style="white-space: pre-wrap; color: #ffffff; font-size: 18px">Por favor haz click en el siguiente botón para resetear tu contraseña</span></h4><div></div></div></td>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d1fdd75e-e3cb-467b-9edc-ca4480e6eb8b">
      <tbody>
        <tr>
          <td align="center" bgcolor="#201F22" class="outer-td" style="padding:30px 0px 30px 0px; background-color:#201F22;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
              <tbody>
                <tr>
                <td align="center" bgcolor="#201f22" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                  <a href="${process.env.NEXTAUTH_URL}/reset-password?email=${req.body.email}&token=${req.body.token}" style="background-color:#201f22; border:2px solid #C1FD35; border-color:#C1FD35; border-radius:10px; border-width:2px; color:#C1FD35; display:inline-block; font-weight:700; letter-spacing:2px; line-height:57px; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; width:240px; font-size:24px;" target="_blank">
                  Click aquí
                  </a>
                </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>`,

      // mailSettings: {
      //   sandboxMode: {
      //     enable: true,
      //   },
      // },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}
