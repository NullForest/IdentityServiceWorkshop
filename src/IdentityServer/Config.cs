using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using IdentityModel;

namespace IdentityServer;

public static class Config
{
    public static IEnumerable<IdentityResource> IdentityResources =>
        new List<IdentityResource>
        { 
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
            new()
            {
                Name = "verification",
                UserClaims = new List<string> 
                { 
                    JwtClaimTypes.Email,
                    JwtClaimTypes.EmailVerified
                }
            }
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new List<ApiScope>
        { 
            new ApiScope("myamazingapi", "MyAmazingAPI") 
        };

    public static IEnumerable<ApiResource> ApiResources =>
        new List<ApiResource>
        { 
        };

    public static IEnumerable<Client> Clients =>
        new List<Client> 
        {
            // machine-to-machine client (from quickstart 1)
            new Client
            {

            },
            // interactive ASP.NET Core Web App
            new Client
            {

            },
            // JavaScript Client
            new Client
            {
            }
        };
}