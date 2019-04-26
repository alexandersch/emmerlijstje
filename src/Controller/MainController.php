<?php


namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class MainController extends AbstractController
{
    private $urlGenerator;

    /**
     * DashboardController constructor.
     *
     * @param UrlGeneratorInterface $urlGenerator
     */
    public function __construct(UrlGeneratorInterface $urlGenerator)
    {
        $this->urlGenerator = $urlGenerator;
    }

    /**
     * @Route("/account/login", name="app_login", methods={"POST"})
     */
    public function login(): void
    {
        $this->getUser();
    }

    /**
     * @Route("/account/logout/{csrf}", name="app_logout")
     * @param CsrfTokenManagerInterface $csrfTokenManager
     * @param TokenStorageInterface $tokenStorage
     * @param string $csrf
     * @return JsonResponse
     */
    public function logout(CsrfTokenManagerInterface $csrfTokenManager, TokenStorageInterface $tokenStorage, string $csrf): JsonResponse
    {
        $refreshToken = $csrfTokenManager->getToken($csrf)->getValue();
        $tokenStorage->setToken();
        return new JsonResponse(["csrf" => $refreshToken]);
    }

    /**
     * @Route(path="/", name="home")
     * @Route(path="/{react}")
     * @Route(path="/u/{react}")
     * @Template(template="base.html.twig")
     */
    public function index()
    {
        // Render the react application
    }


}