<?php

class LayersController extends Zend_Controller_Action
{
	public function init ()
	{
		$this->view->headScript()->appendFile('/js/Layers.js', 'text/javascript');
		$this->view->uniqId = uniqid('foo_');
	}

	public function indexAction ()
	{
	}
}

