<?php


namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{

    /**
     * @Route(path="/")
     * @Route(path="/{react}")
     * @Route(path="/u/{react}")
     * @Template(template="base.html.twig")
     */
    public function index()
    {
    }


}