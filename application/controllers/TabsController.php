<?php

require_once 'Zend/Controller/Action.php';

/**
 * TabsController; Shows how tabbing works.
 *
 * @author      Sascha Schneider <foomy.code@arcor.de>
 */
class TabsController extends Zend_Controller_Action
{

    public function init()
    {
        $this->view->headScript()->appendFile('/js/Tab.js', 'text/javascript');
        $this->view->uniqId = uniqid('foo_');
    }

    public function indexAction()
    {

    }

    public function tabOneAction()
    {
        $this->getHelper('layout')->disableLayout();
    }

    public function tabTwoAction()
    {
        $this->getHelper('layout')->disableLayout();
    }

    public function tabThreeAction()
    {
        $this->getHelper('layout')->disableLayout();
    }

}
