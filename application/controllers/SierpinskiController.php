<?php

class SierpinskiController extends Zend_Controller_Action
{
	public function init()
	{
		$this->view->headScript()->appendFile('/js/Sierpinski.js', 'text/javascript');
	}

	public function indexAction()
	{
	}

	public function triangleAction()
	{
	}
}

/**
 *  "Let me know if there's some other way we can screw up tonight."
 *  (James T. Kirk, Star Trek VI - The Undiscovered Country)
 */
