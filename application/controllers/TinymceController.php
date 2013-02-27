<?php

class TinymceController extends Zend_Controller_Action
{

    public function init()
    {
        $this->view->headScript()->appendFile('/js/tiny_mce/jquery.tinymce.js', 'text/javascript');
        $this->view->headScript()->appendFile('/js/tinymce.js', 'text/javascript');
        $this->view->uniqId = uniqid('foo_');
    }

    public function indexAction()
    {
        // action body
    }


}

