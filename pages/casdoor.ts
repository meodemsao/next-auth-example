import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers/oauth";

export interface CadoorProfile extends Record<string, any> {
  exp: number;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  at_hash: string;
  acr: string;
  sid: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
  user: any;
}

export default function Keycloak<P extends CadoorProfile>(
  options: OAuthUserConfig<P>,
): OAuthConfig<P> {
  return {
    id: "casdoor",
    name: "Casdoor",
    wellKnown: `${options.issuer}/.well-known/openid-configuration`,
    type: "oauth",
    authorization: { params: { scope: "openid email profile" } },
    checks: ["pkce", "state"],
    idToken: true,
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name ?? profile.preferred_username,
        email: profile.email,
        image: profile.picture,
      };
    },
    style: {
      logo: "https://cdn.casbin.org/img/casdoor-logo_1185x256.png",
      logoDark: "https://cdn.casbin.org/img/casdoor-logo_1185x256.png",
      bg: "#fff",
      text: "#000",
      bgDark: "#fff",
      textDark: "#000",
    },
    options,
  };
}
